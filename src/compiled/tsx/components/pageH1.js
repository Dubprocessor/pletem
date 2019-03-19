"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
function PageH1(props) {
    switch (props.mod) {
        case "main":
            return (React.createElement("h1", { className: "page-h1 page-h1_large" },
                " ",
                "\u0426\u0435\u043D\u0442\u0440 \u0410\u0444\u0440\u043E\u043F\u043B\u0435\u0442\u0435\u043D\u0438\u044F",
                React.createElement("br", null),
                React.createElement("span", { className: "page-h1 page-h1_small" }, " \u041C\u0430\u0440\u0438\u043D\u044B \u041A\u0441\u0435\u043D\u043E\u0444\u043E\u043D\u0442\u043E\u0432\u043E\u0439")));
        case "about":
            return React.createElement("h1", { className: "page-h1" }, "\u041E\u0431\u043E \u043C\u043D\u0435");
        case "gallery":
            return React.createElement("h1", { className: "page-h1" }, "\u0413\u0430\u043B\u0435\u0440\u0435\u044F");
        case "prices":
            return React.createElement("h1", { className: "page-h1" }, "\u0426\u0435\u043D\u044B");
        case "testimonials":
            return React.createElement("h1", { className: "page-h1" }, "\u041E\u0442\u0437\u044B\u0432\u044B");
        case "contacts":
            return React.createElement("h1", { className: "page-h1" }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B");
        case "faq":
            return React.createElement("h1", { className: "page-h1" }, "\u0412\u043E\u043F\u0440\u043E\u0441\u044B");
        default:
            return null;
    }
}
exports.PageH1 = PageH1;
exports.consumers = [
    "src/compiled/tsx/index.js",
    "src/compiled/tsx/pages/about/index.js",
    "src/compiled/tsx/pages/contacts/index.js",
    "src/compiled/tsx/pages/faq/index.js",
    "src/compiled/tsx/pages/gallery/index.js",
    "src/compiled/tsx/pages/prices/index.js",
    "src/compiled/tsx/pages/testimonials/index.js",
];
