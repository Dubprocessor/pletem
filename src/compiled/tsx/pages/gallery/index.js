"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var server_1 = require("react-dom/server");
var layout_1 = require("../../components/layout");
var pageH1_1 = require("../../components/pageH1");
function Gallery() {
    var imagesSrc = [
        "../../assets/img/gallery/large/nastya1-large.jpg",
        "../../assets/img/gallery/large/nastya2-large.jpg",
        "../../assets/img/gallery/large/nastya3-large.jpg",
        "../../assets/img/gallery/large/nastya4-large.jpg",
    ];
    var images = imagesSrc.map(function (element, index) {
        return (React.createElement("div", { key: index, className: "gallery__slot" },
            React.createElement("img", { src: element, alt: "\u0434\u0435\u0432\u0443\u0448\u043A\u0430 \u0441 \u0430\u0444\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0438\u043C\u0438 \u043A\u043E\u0441\u0438\u0447\u043A\u0430\u043C\u0438", className: "gallery__img" })));
    });
    return server_1.renderToStaticMarkup(React.createElement(layout_1.Layout, null,
        React.createElement("section", null,
            React.createElement(pageH1_1.PageH1, { mod: "gallery" }),
            React.createElement("div", { className: "gallery" }, images))));
}
exports.default = Gallery;
