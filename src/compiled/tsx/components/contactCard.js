"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
function ContactCard(props) {
    if (props.mod === "moscow") {
        return (React.createElement("div", { className: "contact-card" },
            React.createElement("h3", { className: "contact-card__title" },
                React.createElement("a", { href: "./pages/contacts/" }, "\u041C\u043E\u0441\u043A\u0432\u0430")),
            React.createElement("p", { className: "contact-card__adress" },
                "\u0441\u0442. \u043C\u0435\u0442\u0440\u043E \u041F\u0440\u043E\u0441\u043F\u0435\u043A\u0442 \u041C\u0438\u0440\u0430",
                React.createElement("br", null),
                " \u0443\u043B. \u0413\u0438\u043B\u044F\u0440\u043E\u0432\u0441\u043A\u043E\u0433\u043E 57, \u0441\u0442\u0440. 1",
                React.createElement("br", null),
                " \u0442\u0435\u043B. +7 (905) 288 - 47 - 47")));
    }
    if (props.mod === "petersburgh") {
        return (React.createElement("div", { className: "contact-card contact-card_text-right" },
            React.createElement("h3", { className: "contact-card__title" },
                React.createElement("a", { href: "./pages/contacts/" }, "\u0421 - \u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433")),
            React.createElement("p", { className: "contact-card__adress" },
                "\u0441\u0442. \u043C\u0435\u0442\u0440\u043E \u0412\u0430\u0441\u0438\u043B\u0435\u043E\u0441\u0442\u0440\u043E\u0432\u0441\u043A\u0430\u044F",
                React.createElement("br", null),
                " 16 - \u044F \u043B\u0438\u043D\u0438\u044F \u0412.\u041E., \u0434. 39",
                React.createElement("br", null),
                " \u0442\u0435\u043B. +7 (981) 248 - 55 - 05")));
    }
    return null;
}
exports.ContactCard = ContactCard;
exports.consumers = ["src/compiled/tsx/index.js"];
