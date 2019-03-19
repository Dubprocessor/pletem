"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var decache_1 = require("decache");
var server_1 = require("react-dom/server");
var layout_1 = require("../../components/layout");
var pageH1_1 = require("../../components/pageH1");
var checkBox_1 = require("../../components/checkBox");
var siteData_1 = require("../../../ts/siteData");
decache_1.default("../../../ts/siteData");
function Prices() {
    var tabs = Object.entries(siteData_1.siteData.prices.tabs).map(function (element, index) {
        return (React.createElement("div", { key: index },
            React.createElement("input", { id: "ac-" + (index + 1), className: "accordion__input", name: "accordion", type: "radio", defaultChecked: index === 0 ? true : false }),
            React.createElement("label", { htmlFor: "ac-" + (index + 1), className: "accordion__label" }, element[0]),
            React.createElement("div", { className: "accordion__article" },
                React.createElement("p", null, element[1]))));
    });
    return server_1.renderToStaticMarkup(React.createElement(layout_1.Layout, null,
        React.createElement("section", null,
            React.createElement(pageH1_1.PageH1, { mod: "prices" }),
            React.createElement("div", { className: "container container--static" },
                React.createElement("div", { className: "tabs" }, tabs),
                React.createElement("div", { className: "calc" },
                    React.createElement("form", null,
                        React.createElement("fieldset", null,
                            React.createElement("legend", null, "\u0414\u043B\u0438\u043D\u0430 \u0432\u043E\u043B\u043E\u0441"),
                            React.createElement(checkBox_1.CheckBox, { label: "\u0434\u043E 30 \u0441\u043C", id: "length-1", name: "length", value: "1500" }),
                            React.createElement(checkBox_1.CheckBox, { label: "\u0434\u043E 45 \u0441\u043C", id: "length-2", name: "length", value: "3000" }),
                            React.createElement(checkBox_1.CheckBox, { label: "\u0434\u043E 60 \u0441\u043C", id: "length-3", name: "length", value: "6000" }),
                            React.createElement(checkBox_1.CheckBox, { label: "\u0441\u0432\u044B\u0448\u0435 60 \u0441\u043C ", id: "length-4", name: "length", value: "8000" })),
                        React.createElement("fieldset", null,
                            React.createElement("legend", null, "\u0412\u0438\u0434 \u043A\u043E\u0441\u0438\u0447\u0435\u043A"),
                            React.createElement(checkBox_1.CheckBox, { label: "\u041A\u043B\u0430\u0441\u0441\u0438\u0441\u0435\u0447\u0441\u043A\u0438\u0435 \u0430\u0444\u0440\u043E\u043A\u043E\u0441\u0438\u0447\u043A\u0438", id: "kind-1", name: "kind", value: "1500" }),
                            React.createElement(checkBox_1.CheckBox, { label: "\u0413\u0430\u043D\u0441\u043A\u0438\u0435 \u043A\u043E\u0441\u0438\u0447\u043A\u0438 - \u0431\u0440\u0435\u0439\u0434\u044B", id: "kind-2", name: "kind", value: "3000" }),
                            React.createElement(checkBox_1.CheckBox, { label: "\u0410\u0444\u0440\u043E\u043A\u043E\u0441\u0438\u0447\u043A\u0438 \u0437\u0438\u0437\u0438", id: "kind-3", name: "kind", value: "6000" })),
                        React.createElement("input", { className: "calc__submit", type: "submit", value: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C" })))))));
}
exports.default = Prices;
