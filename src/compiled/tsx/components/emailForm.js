"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
function EmailForm() {
    return (React.createElement("form", { id: "gform", method: "POST", className: "email-form", action: "https://script.google.com/macros/s/AKfycbxQfhpomqQVoUY2PyWtRf4RraVC3ondqV6dwakqm5UAGFZ4BQU/exec" },
        React.createElement("fieldset", { className: "email-form__fieldset" },
            React.createElement("label", { htmlFor: "name" }, "\u0418\u043C\u044F: "),
            React.createElement("input", { id: "name", className: "email-form__input", name: "name", placeholder: "" })),
        React.createElement("fieldset", { className: "email-form__fieldset" },
            React.createElement("label", { htmlFor: "message" }, "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435: "),
            React.createElement("textarea", { id: "message", className: "email-form__input\n                                email-form__input--textarea", name: "message", rows: 10, placeholder: "" })),
        React.createElement("fieldset", { className: "email-form__fieldset" },
            React.createElement("label", { htmlFor: "email" }, " \u0412\u0430\u0448 email:"),
            React.createElement("input", { id: "email", className: "email-form__input", name: "email", type: "email", defaultValue: "", required: true, placeholder: "" }),
            React.createElement("span", { id: "email-invalid", className: "email-form__input--invalid" }, "\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 email \u0430\u0434\u0440\u0435\u0441!")),
        React.createElement("fieldset", { className: "email-form__fieldset" },
            React.createElement("button", { className: "email-form__submit" },
                React.createElement("i", { className: "fa fa-paper-plane" }),
                "\u00A0\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435")),
        React.createElement("div", { className: "email-form__thankyou-message" },
            React.createElement("p", null,
                "\u0421\u043F\u0430\u0441\u0438\u0431\u043E! \u0412\u0430\u0448\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E.",
                React.createElement("br", null),
                " \u041C\u044B \u043E\u0442\u0432\u0435\u0442\u0438\u043C \u0412\u0430\u043C \u0432 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F!"))));
}
exports.EmailForm = EmailForm;
exports.consumers = ["src/compiled/tsx/pages/contacts/index.js"];
