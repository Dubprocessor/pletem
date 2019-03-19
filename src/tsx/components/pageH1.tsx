import * as React from "react";
import { JsxChild } from "typescript";

type Props = {
  // children: React.ReactNode | JsxChild;
  mod: string;
};

export function PageH1(props: Props) {
  switch (props.mod) {
    case "main":
      return (
        <h1 className="page-h1 page-h1_large">
          {" "}
          Центр Афроплетения
          <br />
          <span className="page-h1 page-h1_small"> Марины Ксенофонтовой</span>
        </h1>
      );
    case "about":
      return <h1 className="page-h1">Обо мне</h1>;
    case "gallery":
      return <h1 className="page-h1">Галерея</h1>;
    case "prices":
      return <h1 className="page-h1">Цены</h1>;
    case "testimonials":
      return <h1 className="page-h1">Отзывы</h1>;
    case "contacts":
      return <h1 className="page-h1">Контакты</h1>;
    case "faq":
      return <h1 className="page-h1">Вопросы</h1>;
    default:
      return null;
  }
}

export const consumers = [
  "src/compiled/tsx/index.js",
  "src/compiled/tsx/pages/about/index.js",
  "src/compiled/tsx/pages/contacts/index.js",
  "src/compiled/tsx/pages/faq/index.js",
  "src/compiled/tsx/pages/gallery/index.js",
  "src/compiled/tsx/pages/prices/index.js",
  "src/compiled/tsx/pages/testimonials/index.js",
];
