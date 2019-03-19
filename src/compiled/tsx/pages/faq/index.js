"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var server_1 = require("react-dom/server");
var layout_1 = require("../../components/layout");
var pageH1_1 = require("../../components/pageH1");
var siteData_1 = require("../../../ts/siteData");
function Faq() {
    var accordion = Object.entries(siteData_1.siteData.faq.accordion).map(function (element, index) {
        return (React.createElement("div", { key: index },
            React.createElement("input", { id: "ac-" + (index + 1), className: "accordion__input", name: "accordion", type: "radio", defaultChecked: index === 0 ? true : false }),
            React.createElement("label", { htmlFor: "ac-" + (index + 1), className: "accordion__label" }, element[0]),
            React.createElement("div", { className: "accordion__article" },
                React.createElement("p", null, element[1]))));
    });
    return server_1.renderToStaticMarkup(React.createElement(layout_1.Layout, null,
        React.createElement("section", null,
            React.createElement(pageH1_1.PageH1, { mod: "faq" }),
            React.createElement("div", { className: "accordion" }, accordion))));
}
exports.default = Faq;
