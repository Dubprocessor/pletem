"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var server_1 = require("react-dom/server");
var layout_1 = require("./components/layout");
var pageH1_1 = require("./components/pageH1");
var logo_1 = require("./components/logo");
var contactCard_1 = require("./components/contactCard");
function IndexPage() {
    return server_1.renderToStaticMarkup(React.createElement(layout_1.Layout, { mod: "index" },
        React.createElement("div", { className: "signboard" },
            React.createElement(pageH1_1.PageH1, { mod: "main" }),
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "container__col-3 container__col-3--first" },
                    React.createElement(contactCard_1.ContactCard, { mod: "moscow" })),
                React.createElement("div", { className: "container__col-3 container__col-3--second" },
                    React.createElement(logo_1.Logo, null)),
                React.createElement("div", { className: "container__col-3 container__col-3--third" },
                    React.createElement(contactCard_1.ContactCard, { mod: "petersburgh" }))))));
}
exports.default = IndexPage;
