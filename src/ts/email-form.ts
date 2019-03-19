function validEmail(email: string): boolean {
  const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
}

function validateHuman(honeypot: string): boolean | void {
  if (honeypot) {
    // if hidden form filled up
    console.log("Robot Detected!");
    return true;
  }
  console.log("Welcome Human!");
}

// get all data in form and return object
function getFormData(form: HTMLFormElement) {
  interface ElementsObject extends HTMLFormControlsCollection {
    [key: string]: any;
  }
  const elements: ElementsObject = form.elements;

  const fields = Object.keys(elements)
    .filter(k => {
      return elements[k].name !== "honeypot";
    })
    .map(k => {
      if (elements[k].name !== undefined) {
        return elements[k].name;
        // special case for Edge's html collection
      }
      if (elements[k].length > 0) {
        return elements[k].item(0).name;
      }
    })
    .filter((item, pos, self) => {
      return self.indexOf(item) === pos && item;
    });

  const formData: any = {};
  fields.forEach((name: string) => {
    const element = elements[name];

    // singular form elements just have one value
    formData[name] = element.value;

    // when element has multiple items, get their values
    if (element.length) {
      const data = [];
      for (let i = 0; i < element.length; i++) {
        const item = element.item(i);
        if (item.checked || item.selected) {
          data.push(item.value);
        }
      }
      formData[name] = data.join(", ");
    }
  });

  // add form-specific values into the data
  formData.formDataNameOrder = JSON.stringify(fields);
  formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
  formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default

  console.log(formData);
  return formData;
}

function handleFormSubmit(event: any): boolean | void {
  event.preventDefault();
  const form = event.target;
  const data = getFormData(form); // get the values submitted in the form

  if (validateHuman(data.honeypot)) {
    // if form is filled, form will not be submitted
    return false;
  }
  const invalidEmail = form.querySelector(".email-form__input--invalid");
  if (data.email && !validEmail(data.email)) {
    // if email is not valid show error
    if (invalidEmail) {
      invalidEmail.style.display = "block";
      return false;
    }
  } else {
    invalidEmail.style.display = "none";
    disableAllButtons(form);
    const url = form.action;
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
      console.log(xhr.status, xhr.statusText);
      console.log(xhr.responseText);
      const formElements = form.querySelectorAll(".email-form__input");
      if (formElements) {
        formElements.forEach((element: HTMLInputElement) => {
          element.value = "";
        });
      }
      const thankYouMessage = form.lastChild;
      if (thankYouMessage) {
        thankYouMessage.style.display = "block";
      }
      return;
    };
    // url encode form data for sending as post data
    const encoded = Object.keys(data)
      .map(k => {
        return `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`;
      })
      .join("&");
    xhr.send(encoded);
  }
}

function loaded() {
  console.log("Contact form submission handler loaded successfully.");
  // bind to the submit event of the form
  const forms = document.querySelectorAll(".email-form");
  for (let i = 0; i < forms.length; i++) {
    forms[i].addEventListener("submit", handleFormSubmit, false);
  }
}
document.addEventListener("DOMContentLoaded", loaded, false);

function disableAllButtons(form: HTMLFormElement): void {
  const buttons = form.querySelectorAll("button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
}
