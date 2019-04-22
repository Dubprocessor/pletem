"use strict";
document.addEventListener("click", function (event) {
    var id = event.target.id;
    function setSpb() {
        sessionStorage.setItem("spbRef", JSON.stringify(true));
        sessionStorage.setItem("moscowRef", JSON.stringify(false));
    }
    function setMoscow() {
        sessionStorage.setItem("moscowRef", JSON.stringify(true));
        sessionStorage.setItem("spbRef", JSON.stringify(false));
    }
    if (id === "spbRef" || id === "spbRef1") {
        setSpb();
    }
    if (id === "spbRef1") {
        event.preventDefault();
        initMap();
    }
    if (id === "moscowRef" || id === "moscowRef1") {
        setMoscow();
    }
    if (id === "moscowRef1") {
        event.preventDefault();
        initMap();
    }
});

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

"use strict";
(function () {
    var snapDistance = 30;
    var el;
    var underlay;
    var img;
    var bound;
    var W;
    var H;
    var isOutside = false;
    var isOpen;
    var isTouch;
    var hasMoved;
    function init() {
        W = window.innerWidth;
        H = window.innerHeight;
        underlay = document.createElement("div");
        underlay.setAttribute("style", "position: fixed; left:0; top: 0; width:100vw; height: 100vh; transition: opacity 0.25s ease 200ms; opacity: 0; pointer-events:none; background: rgba(0,0,0,0.7);");
        document.body.appendChild(underlay);
        img = document.createElement("img");
        img.setAttribute("style", "max-width: 100vw; position: fixed; z-index: 2; transform: translate(0%, 0%); transition: transform 0.3s ease 200ms, opacity 0.4s ease 200ms; opacity: 0;pointer-events:none;");
        document.body.appendChild(img);
        try {
            // Detect touch screen. Otherwise will throw err.
            document.createEvent("TouchEvent");
            img.style.transform = "translate(-50%, -50%)";
            img.style.left = "50%";
            img.style.top = "50%";
            img.style.maxWidth = W + "px";
            document.addEventListener("touchstart", onMouseOver);
            isTouch = true;
        }
        catch (e) {
            document.addEventListener("mouseover", onMouseOver);
        }
    }
    if (window.location.pathname.includes("gallery")) {
        init();
    }
    function onTouchMove() {
        hasMoved = true;
    }
    function onTouchEnd(e) {
        document.removeEventListener("touchmove", onTouchMove);
        document.removeEventListener("touchend", onTouchEnd);
        // If it wasn't a swipe, open/close image
        if (!hasMoved) {
            if (isOpen) {
                isOpen = false;
                reset();
            }
            else if (e.target.tagName === "IMG") {
                openImage(e.target);
            }
        }
    }
    /**
     * Checks all 4 sides of target element which has max area available
     * for the image, maintaining the aspect ratio.
     * @return {string} Side which has max area.
     */
    function getSideWithMaxArea() {
        var aspectRatio = el.width / el.height;
        var areas = {
            top: aspectRatio * bound.top * bound.top,
            bottom: aspectRatio * (H - bound.bottom) * (H - bound.bottom),
            left: (bound.left / aspectRatio) * bound.left,
            right: ((W - bound.right) / aspectRatio) * (W - bound.right),
        };
        var maxArea = 0;
        var maxSide;
        for (var side in areas) {
            if (areas[side] > maxArea) {
                maxArea = areas[side];
                maxSide = side;
            }
        }
        return maxSide;
    }
    function openImage(target) {
        el = target;
        img.src = el.src;
        img.style.opacity = "1";
        underlay.style.opacity = "1";
        if (isTouch) {
            img.style.transform = "translate(-50%, -50%) scale(1)";
        }
        else {
            img.style.top = "0px";
            img.style.transform = "translate(0%, 0%) scale(1)";
            bound = el.getBoundingClientRect();
            var side = getSideWithMaxArea();
            if (side === "top") {
                img.style.maxHeight = bound.top + "px";
                img.style.maxWidth = "none";
                img.style.left = "0";
                img.style.top = "0";
            }
            else if (side === "bottom") {
                img.style.maxHeight = H - bound.bottom + "px";
                img.style.maxWidth = "none";
                img.style.left = "0";
                img.style.top = "" + bound.bottompx;
            }
            else if (side === "right") {
                img.style.maxWidth = W - bound.right + "px";
                img.style.maxHeight = "none";
                img.style.left = bound.right + "px";
            }
            else {
                img.style.maxWidth = bound.left + "px";
                img.style.maxHeight = "none";
                img.style.left = "0";
            }
            document.addEventListener("mousemove", onMove);
            document.addEventListener("mouseout", onMouseOut);
        }
        isOpen = true;
    }
    function onMouseOver(e) {
        el = e.target;
        if (isTouch) {
            hasMoved = false;
            document.addEventListener("touchmove", onTouchMove);
            document.addEventListener("touchend", onTouchEnd);
        }
        else if (el.tagName === "IMG") {
            openImage(el);
        }
    }
    function getMouse(mouseEvent) {
        if (!bound)
            return {};
        var mouseX;
        var mouseY;
        if (isTouch) {
            mouseEvent.preventDefault();
            mouseX = mouseEvent.touches[0].pageX;
            mouseY = mouseEvent.touches[0].pageY;
        }
        else {
            mouseX = mouseEvent.clientX;
            mouseY = mouseEvent.clientY;
        }
        // Snap mouse to boundaries if they go out of bound upto some distance
        if (bound.left - mouseX > 0 && bound.left - mouseX < snapDistance) {
            mouseX = bound.left;
        }
        else if (mouseX - bound.right > 0 && mouseX - bound.right < snapDistance) {
            mouseX = bound.right;
        }
        if (bound.top - mouseY > 0 && bound.top - mouseY < snapDistance) {
            mouseY = bound.top;
        }
        else if (mouseY - bound.bottom > 0 && mouseY - bound.bottom < snapDistance) {
            mouseY = bound.bottom;
        }
        return { x: mouseX, y: mouseY };
    }
    function onMove(e) {
        if (!img || !bound)
            return;
        var mouse = getMouse(e);
        var top;
        if (img.height > H) {
            top = bound.top - mouse.y;
            img.style.top = "calc(" + ((1 * top) / bound.height) * (img.height - H) + "px)";
        }
        if (isOutside &&
            (mouse.x > bound.right ||
                mouse.x < bound.left ||
                mouse.y > bound.bottom ||
                mouse.y < bound.top)) {
            reset();
        }
    }
    function reset() {
        img.style.opacity = underlay.style.opacity = "0";
        el = null;
        bound = null;
        isOutside = false;
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseout", onMouseOut);
        if (isTouch) {
            img.style.transform = "translate(-50%, -50%) scale(1)";
        }
        else {
            img.style.transform = "translate(0%, 0%) scale(0.9)";
        }
    }
    function onMouseOut(e) {
        var mouse = getMouse(e);
        if (!(mouse.x > bound.right ||
            mouse.x < bound.left ||
            mouse.y > bound.bottom ||
            mouse.y < bound.top)) {
            isOutside = true;
            return;
        }
        reset();
    }
    window.addEventListener("resize", function () {
        W = window.innerWidth;
        H = window.innerHeight;
    });
})();

"use strict";
function initMap() {
    var moscowRef = sessionStorage.getItem("moscowRef");
    var pos = { lat: 59.939421, lng: 30.266996 }; // default position - SPB
    var infoWindowContent = "<p style=\"color: black;\">\u0426\u0435\u043D\u0442\u0440 \u0410\u0444\u0440\u043E\u043F\u043B\u0435\u0442\u0435\u043D\u0438\u044F<br/>\n  <b>\u0421\u0410\u041D\u041A\u0422 - \u041F\u0415\u0422\u0415\u0420\u0411\u0423\u0420\u0413</b><br/>\n  16 - \u044F \u043B\u0438\u043D\u0438\u044F \u0412.\u041E., \u0434. 39 <br/>\n  +7 (981) 248 - 55 - 05</p>";
    if (moscowRef && JSON.parse(moscowRef)) {
        pos.lat = 55.787257;
        pos.lng = 37.632220;
        infoWindowContent = "<p style=\"color: black\">\u0426\u0435\u043D\u0442\u0440 \u0410\u0444\u0440\u043E\u043F\u043B\u0435\u0442\u0435\u043D\u0438\u044F<br/>\n    <b>\u041C\u041E\u0421\u041A\u0412\u0410</b><br/>\n    \u0443\u043B. \u0413\u0438\u043B\u044F\u0440\u043E\u0432\u0441\u043A\u043E\u0433\u043E, \u0434. 57, \u0441\u0442\u0440. 1 <br/>\n    +7 (905) 288 - 47 - 47</p>";
    }
    // Styles a map in night mode.
    console.log("initMap was called!");
    var map = new google.maps.Map(document.getElementById("map"), {
        center: pos,
        zoom: 18,
        mapTypeControl: false,
        styles: [
            { elementType: "geometry", stylers: [{ color: "#150509" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
            {
                featureType: "administrative.locality",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [{ color: "#263c3f" }],
            },
            {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [{ color: "#6b9a76" }],
            },
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ color: "#38414e" }],
            },
            {
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [{ color: "#212a37" }],
            },
            {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [{ color: "#9ca5b3" }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{ color: "#746855" }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{ color: "#1f2835" }],
            },
            {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [{ color: "#f3d19c" }],
            },
            {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{ color: "#2f3948" }],
            },
            {
                featureType: "transit.station",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#17263c" }],
            },
            {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{ color: "#515c6d" }],
            },
            {
                featureType: "water",
                elementType: "labels.text.stroke",
                stylers: [{ color: "#17263c" }],
            },
        ],
    });
    var marker = new google.maps.Marker({ position: pos, map: map, icon: "../../assets/img/marker.png", title: "Центр Афроплетения" });
    var infowindow = new google.maps.InfoWindow({
        content: infoWindowContent
    });
    infowindow.open(map, marker);
    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });
}

"use strict";
var menuButton = document.getElementById("menuButton");
var menu = document.getElementById("menu");
if (menuButton) {
    menuButton.addEventListener("click", displayMenu);
}
function displayMenu() {
    if (menu) {
        menu.classList.toggle("header__nav--visible");
    }
}
var l = 1;

"use strict";
function displayPrice(event) {
    event.preventDefault();
    var price = 0;
    var priceMap = new Map();
    priceMap.set("kind-1", new Map([["length-1", "4500"], ["length-2", "6500"], ["length-3", "7000"], ["length-4", "7000"]]));
    priceMap.set("kind-2", new Map([["length-1", "3500"], ["length-2", "3500"], ["length-3", "3500"], ["length-4", "3500"]]));
    priceMap.set("kind-3", new Map([["length-1", "6500"], ["length-2", "7000"], ["length-3", "7000"], ["length-4", "7500"]]));
    var priceDOM = document.getElementById("calc__display");
    var checkedLength = document.querySelector('input[name="length"]:checked');
    var checkedKind = document.querySelector('input[name="kind"]:checked');
    if (checkedLength && !checkedKind) {
        priceDOM.innerText = "Пожалуйста, выберите вид косичек!";
    }
    if (checkedKind && !checkedLength) {
        priceDOM.innerText = "Пожалуйста, выберите длину волос!";
    }
    if (!checkedKind && !checkedLength) {
        priceDOM.innerText = "Пожалуйста, выберите длину волос и вид косичек!";
    }
    if (checkedLength && checkedKind) {
        switch (checkedKind.id) {
            case "kind-1":
                var classic = priceMap.get("kind-1");
                price = classic.get(checkedLength.id);
                break;
            case "kind-2":
                var ghana = priceMap.get("kind-2");
                price = ghana.get(checkedLength.id);
                break;
            case "kind-3":
                var zizi = priceMap.get("kind-3");
                price = zizi.get(checkedLength.id);
                break;
            default:
        }
        priceDOM.innerText = price + " \u0440\u0443\u0431.*\n        *\u0426\u0435\u043D\u0430 \u043C\u043E\u0436\u0435\u0442 \u043D\u0435\u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043E\u0442\u043B\u0438\u0447\u0430\u0442\u044C\u0441\u044F \u043F\u0440\u0438 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u043C \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u0438.";
    }
    return;
}
var calcSubmit = document.querySelector('.calc__submit');
if (calcSubmit)
    calcSubmit.addEventListener("click", displayPrice);
