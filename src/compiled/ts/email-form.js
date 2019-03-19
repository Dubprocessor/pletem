"use strict";
function validEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}
function validateHuman(honeypot) {
    if (honeypot) {
        // if hidden form filled up
        console.log("Robot Detected!");
        return true;
    }
    console.log("Welcome Human!");
}
// get all data in form and return object
function getFormData(form) {
    var elements = form.elements;
    var fields = Object.keys(elements)
        .filter(function (k) {
        return elements[k].name !== "honeypot";
    })
        .map(function (k) {
        if (elements[k].name !== undefined) {
            return elements[k].name;
            // special case for Edge's html collection
        }
        if (elements[k].length > 0) {
            return elements[k].item(0).name;
        }
    })
        .filter(function (item, pos, self) {
        return self.indexOf(item) === pos && item;
    });
    var formData = {};
    fields.forEach(function (name) {
        var element = elements[name];
        // singular form elements just have one value
        formData[name] = element.value;
        // when element has multiple items, get their values
        if (element.length) {
            var data = [];
            for (var i = 0; i < element.length; i++) {
                var item = element.item(i);
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
function handleFormSubmit(event) {
    event.preventDefault();
    var form = event.target;
    var data = getFormData(form); // get the values submitted in the form
    if (validateHuman(data.honeypot)) {
        // if form is filled, form will not be submitted
        return false;
    }
    var invalidEmail = form.querySelector(".email-form__input--invalid");
    if (data.email && !validEmail(data.email)) {
        // if email is not valid show error
        if (invalidEmail) {
            invalidEmail.style.display = "block";
            return false;
        }
    }
    else {
        invalidEmail.style.display = "none";
        disableAllButtons(form);
        var url = form.action;
        var xhr_1 = new XMLHttpRequest();
        xhr_1.open("POST", url);
        // xhr.withCredentials = true;
        xhr_1.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr_1.onreadystatechange = function () {
            console.log(xhr_1.status, xhr_1.statusText);
            console.log(xhr_1.responseText);
            var formElements = form.querySelectorAll(".email-form__input");
            if (formElements) {
                formElements.forEach(function (element) {
                    element.value = "";
                });
            }
            var thankYouMessage = form.lastChild;
            if (thankYouMessage) {
                thankYouMessage.style.display = "block";
            }
            return;
        };
        // url encode form data for sending as post data
        var encoded = Object.keys(data)
            .map(function (k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
        })
            .join("&");
        xhr_1.send(encoded);
    }
}
function loaded() {
    console.log("Contact form submission handler loaded successfully.");
    // bind to the submit event of the form
    var forms = document.querySelectorAll(".email-form");
    for (var i = 0; i < forms.length; i++) {
        forms[i].addEventListener("submit", handleFormSubmit, false);
    }
}
document.addEventListener("DOMContentLoaded", loaded, false);
function disableAllButtons(form) {
    var buttons = form.querySelectorAll("button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
}
