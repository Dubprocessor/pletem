"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var server_1 = require("react-dom/server");
var layout_1 = require("../../components/layout");
var pageH1_1 = require("../../components/pageH1");
var siteData_1 = require("../../../ts/siteData");
function Testimonials() {
    function getTestimoinals() {
        var data = siteData_1.siteData.testimonials.autors;
        var testimonials = [];
        for (var key in data) {
            var autor = key;
            var imgSrc = data[key][0];
            var socialLink = data[key][1];
            var text = data[key][2];
            testimonials.push(React.createElement("div", { key: key, className: "testimonial " },
                React.createElement("img", { src: imgSrc, alt: "\u0430\u0432\u0442\u043E\u0440 \u043E\u0442\u0437\u044B\u0432\u0430", className: "testimonial__img" }),
                React.createElement("a", { href: socialLink, target: "_blank" },
                    React.createElement("i", { className: "fa fa-instagram fa-lg", "aria-hidden": "true" })),
                React.createElement("h2", { className: "card-title" }, autor),
                React.createElement("p", { className: "text-content text-content--testimonial" }, text)));
        }
        return testimonials;
    }
    return server_1.renderToStaticMarkup(React.createElement(layout_1.Layout, null,
        React.createElement("section", null,
            React.createElement(pageH1_1.PageH1, { mod: "testimonials" }),
            React.createElement("div", { className: "container container--static" }, getTestimoinals()))));
}
exports.default = Testimonials;
