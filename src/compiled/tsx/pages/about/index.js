"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var server_1 = require("react-dom/server");
var layout_1 = require("../../components/layout");
var pageH1_1 = require("../../components/pageH1");
function About() {
    return server_1.renderToStaticMarkup(React.createElement(layout_1.Layout, null,
        React.createElement("article", null,
            React.createElement(pageH1_1.PageH1, { mod: "about" }),
            React.createElement("p", { className: "text-content" },
                React.createElement("img", { className: "about-image", src: "../../assets/img/about_photo.jpg", alt: "\u043C\u0430\u0441\u0442\u0435\u0440 \u0437\u0430\u043F\u043B\u0435\u0442\u0435\u043D\u0438\u044F \u0430\u0444\u0440\u043E\u043A\u043E\u0441\u0438\u0447\u0435\u043A \u041C\u0430\u0440\u0438\u043D\u0430 \u041A\u0441\u0435\u043D\u043E\u0444\u043E\u043D\u0442\u043E\u0432\u0430" }),
                "\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435. \u041C\u0435\u043D\u044F \u0437\u043E\u0432\u0443\u0442 \u041C\u0430\u0440\u0438\u043D\u0430 \u041A\u0441\u0435\u043D\u043E\u0444\u043E\u043D\u0442\u043E\u0432\u0430.",
                React.createElement("br", null),
                "\u042F \u0441\u0442\u0438\u043B\u0438\u0441\u0442 \u043F\u043E \u043F\u0440\u0438\u0447\u0435\u0441\u043A\u0430\u043C \u0438 \u043C\u0430\u0441\u0442\u0435\u0440 \u0430\u0444\u0440\u043E\u043F\u043B\u0435\u0442\u0435\u043D\u0438\u044F \u0441 \u043C\u043D\u043E\u0433\u043E\u043B\u0435\u0442\u043D\u0438\u043C \u043E\u043F\u044B\u0442\u043E\u043C. C 2003 \u0433\u043E\u0434\u0430 \u044F \u0437\u0430\u043D\u0438\u043C\u0430\u044E\u0441\u044C \u043B\u044E\u0431\u0438\u043C\u044B\u043C \u0434\u0435\u043B\u043E\u043C, \u0438 \u0432 2006 \u0433\u043E\u0434\u0443 \u0441\u0442\u0430\u043B\u0430 \u043F\u043E\u0431\u0435\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u0438\u0446\u0435\u0439 \u043A\u043E\u043D\u043A\u0443\u0440\u0441\u0430 \u00AB\u0410\u0444\u0440\u043E\u043F\u043B\u0435\u0442\u0435\u043D\u0438\u0435\u00BB \u041C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u043E\u0433\u043E \u0444\u0435\u0441\u0442\u0438\u0432\u0430\u043B\u044F \u043A\u0440\u0430\u0441\u043E\u0442\u044B \u00AB\u041D\u0435\u0432\u0441\u043A\u0438\u0435 \u0431\u0435\u0440\u0435\u0433\u0430\u00BB. ",
                React.createElement("br", null),
                "\u0417\u0430 \u044D\u0442\u043E \u0432\u0440\u0435\u043C\u044F \u044F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043B\u0430 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u0443\u044E \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044E \u043F\u043B\u0435\u0442\u0435\u043D\u0438\u044F \u00AB\u0417\u0438\u0437\u0438\u00BB. \u041C\u043E\u044F \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E \u0441\u043E\u043A\u0440\u0430\u0442\u0438\u0442\u044C \u0432\u0440\u0435\u043C\u044F \u043F\u043B\u0435\u0442\u0435\u043D\u0438\u044F, \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0445 \u0438\u0441\u043A\u0443\u0441\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \u0438 \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0443 \u043D\u0430 \u043A\u043E\u0440\u043D\u0438 \u0432\u043E\u043B\u043E\u0441. - \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0434\u043B\u044F \u0437\u0430\u043F\u043B\u0435\u0442\u0435\u043D\u0438\u044F 500 \u043A\u043E\u0441\u0438\u0447\u0435\u043A \u043C\u044B \u043F\u043E\u0442\u0440\u0430\u0442\u0438\u043C \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 4 \u0447\u0430\u0441\u043E\u0432, \u0438 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u043C \u0431\u0443\u0434\u0443\u0442 \u043A\u0440\u0430\u0441\u0438\u0432\u044B\u0435, \u0430\u043A\u043A\u0443\u0440\u0430\u0442\u043D\u044B\u0435 \u0438 \u044D\u0444\u0444\u0435\u043A\u0442\u043D\u044B\u0435 \u043A\u043E\u0441\u0438\u0447\u043A\u0438. ",
                React.createElement("br", null),
                "\u041C\u043E\u044F \u0440\u0430\u0431\u043E\u0442\u0430 \u043D\u0438\u043A\u043E\u0433\u0434\u0430 \u043D\u0435 \u0431\u044B\u043B\u0430 \u0434\u043B\u044F \u043C\u0435\u043D\u044F \u0440\u0443\u0442\u0438\u043D\u043E\u0439, \u043C\u043E\u044F \u0440\u0430\u0431\u043E\u0442\u0430 \u2013 \u044D\u0442\u043E \u043C\u043E\u0435 \u0443\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u0435, \u0441\u043F\u043E\u0441\u043E\u0431 \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u043A\u043E\u0439 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u0438 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043E\u0431\u0449\u0435\u043D\u0438\u044F \u0441 \u043C\u043E\u0438\u043C\u0438 \u043B\u044E\u0431\u0438\u043C\u044B\u043C\u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u043A\u0430\u043C\u0438. A a\u0444\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0438\u0435 \u043A\u043E\u0441\u0438\u0447\u043A\u0438 - \u044D\u0442\u043E \u0443\u043B\u044C\u0442\u0440\u0430\u043C\u043E\u0434\u043D\u0430\u044F \u0438 \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u043D\u0430\u044F \u043F\u0440\u0438\u0447\u0435\u0441\u043A\u0430, \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0449\u0430\u044F \u043D\u0430\u043C \u0432\u044B\u0433\u043B\u044F\u0434\u0435\u0442\u044C \u043A\u0440\u0430\u0441\u0438\u0432\u043E \u0432 \u043F\u043E\u0432\u0441\u0435\u0434\u043D\u0435\u0432\u043D\u043E\u0439 \u0436\u0438\u0437\u043D\u0438, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0432 \u043F\u043E\u0435\u0437\u0434\u043A\u0435 \u0438\u043B\u0438 \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0438, \u0432 \u043B\u044E\u0431\u0443\u044E \u043F\u043E\u0433\u043E\u0434\u0443 \u0438 \u0432\u0440\u0435\u043C\u044F \u0441\u0443\u0442\u043E\u043A. - \u042D\u0442\u043E \u0441\u043F\u043E\u0441\u043E\u0431 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0432\u043E\u0439 \u043E\u0431\u0440\u0430\u0437 \u0431\u0435\u0437 \u0432\u0440\u0435\u0434\u0430 \u0434\u043B\u044F \u0441\u0432\u043E\u0438\u0445 \u0432\u043E\u043B\u043E\u0441. ",
                React.createElement("br", null),
                "\u041C\u0438\u043B\u044B\u0435 \u0434\u0435\u0432\u0443\u0448\u043A\u0438, \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442\u0435 \u043A\u043E \u043C\u043D\u0435, \u044F \u043E\u0431\u0435\u0449\u0430\u044E \u0432\u0430\u043C \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u043E\u0434\u0445\u043E\u0434, \u0443\u0447\u0442\u0443 \u0432\u0441\u0435 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0432\u0430\u0448\u0435\u0439 \u0432\u043D\u0435\u0448\u043D\u043E\u0441\u0442\u0438 \u0438 \u0442\u0438\u043F\u0430 \u0432\u043E\u043B\u043E\u0441, \u0434\u0430\u043C \u0432\u0441\u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 \u0441\u043E\u0432\u0435\u0442\u044B \u0438 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438 \u043F\u043E \u0443\u0445\u043E\u0434\u0443 \u0438 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u044E \u043F\u0440\u0438\u0447\u0435\u0441\u043A\u0438 - \u0441\u0434\u0435\u043B\u0430\u044E \u0432\u0441\u0435, \u0447\u0442\u043E\u0431\u044B \u0432\u044B \u0432\u044B\u0433\u043B\u044F\u0434\u0435\u043B\u0438 \u0441\u0430\u043C\u044B\u043C\u0438 \u043C\u043E\u0434\u043D\u044B\u043C\u0438 \u0438 \u043A\u0440\u0430\u0441\u0438\u0432\u044B\u043C\u0438!"))));
}
exports.default = About;
