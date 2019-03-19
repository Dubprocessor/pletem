"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var server_1 = require("react-dom/server");
var layout_1 = require("../../components/layout");
var pageH1_1 = require("../../components/pageH1");
var emailForm_1 = require("../../components/emailForm");
function Contacts() {
    return server_1.renderToStaticMarkup(React.createElement(layout_1.Layout, { mod: "contacts" },
        React.createElement("section", null,
            React.createElement(pageH1_1.PageH1, { mod: "contacts" }),
            React.createElement("div", { className: "contacts" },
                React.createElement("div", { id: "map", className: "contacts__map" }, "map will be here!"),
                React.createElement(emailForm_1.EmailForm, null)))));
}
exports.default = Contacts;
