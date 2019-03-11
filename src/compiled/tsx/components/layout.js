"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
function Layout(props) {
    return (React.createElement("html", { lang: "ru" },
        React.createElement("head", null,
            React.createElement("meta", { charSet: "UTF-8" }),
            React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
            React.createElement("title", null, "\u0426\u0435\u043D\u0442\u0440 \u0410\u0444\u0440\u043E\u043F\u043B\u0435\u0442\u0435\u043D\u0438\u044F"),
            React.createElement("script", { src: "https://use.fontawesome.com/e3f6dba723.js" }),
            React.createElement("link", { rel: "preload", href: (props.mod === 'index' ? './' : '../../') + "assets/fonts/Alexandra_Script.ttf", as: "font", type: "font/ttf" }),
            React.createElement("link", { rel: "stylesheet", href: (props.mod === 'index' ? './' : '../../') + "dist/styles/minified/main.css" }),
            React.createElement("link", { href: "https://fonts.googleapis.com/css?family=Poiret+One&subset=cyrillic", rel: "stylesheet", crossOrigin: "" })),
        React.createElement("body", null,
            React.createElement("header", { className: "header" },
                React.createElement("button", { id: "menuButton", className: "header__menu-button" }, "\u041C\u0415\u041D\u042E"),
                React.createElement("nav", { id: "menu", className: "header__nav" },
                    ' ',
                    React.createElement("a", { className: "header__link", href: "" + (props.mod === 'index' ? './' : '../../') }, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F"),
                    ' ',
                    React.createElement("a", { className: "header__link", href: (props.mod === 'index' ? './' : '../../') + "pages/about" }, "\u041E\u0431\u043E \u043C\u043D\u0435"),
                    ' ',
                    React.createElement("a", { className: "header__link", href: (props.mod === 'index' ? './' : '../../') + "pages/gallery" }, "\u0413\u0430\u043B\u0435\u0440\u0435\u044F"),
                    ' ',
                    React.createElement("a", { className: "header__link", href: (props.mod === 'index' ? './' : '../../') + "pages/testimonials" }, "\u041E\u0442\u0437\u044B\u0432\u044B"),
                    ' ',
                    React.createElement("a", { className: "header__link", href: (props.mod === 'index' ? './' : '../../') + "pages/prices" }, "\u0426\u0435\u043D\u044B"),
                    ' ',
                    React.createElement("a", { className: "header__link", href: (props.mod === 'index' ? './' : '../../') + "pages/contacts" }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"),
                    ' ',
                    React.createElement("a", { className: "header__link", href: (props.mod === 'index' ? './' : '../../') + "pages/faq" }, "\u0412\u043E\u043F\u0440\u043E\u0441\u044B"),
                    ' ')),
            React.createElement("div", { className: "wrapper" }, props.children),
            React.createElement("footer", { className: "footer" },
                React.createElement("div", { className: "footer__content" },
                    React.createElement("small", null,
                        "2017 \u00A9 |",
                        React.createElement("a", { href: "#" }, "Dub Processor")))),
            React.createElement("script", { src: (props.mod === 'index' ? './' : '../../') + "dist/scripts/minified/bundle.js" }),
            props.mod === 'contacts' ? (React.createElement("script", { src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCdaNHuar7WHma0E6M6u3LVAzN0xZ5n3jw&language=ru&region=ru&callback=initMap", async: true, defer: true })) : null)));
}
exports.Layout = Layout;
exports.consumers = [
    'src/compiled/tsx/index.js',
    'src/compiled/tsx/pages/about/index.js',
    'src/compiled/tsx/pages/contacts/index.js',
    'src/compiled/tsx/pages/faq/index.js',
    'src/compiled/tsx/pages/gallery/index.js',
    'src/compiled/tsx/pages/prices/index.js',
    'src/compiled/tsx/pages/testimonials/index.js'
];
