import * as React from "react";

type Props = {
  mod: string;
};
export function ContactCard(props: Props) {
  if (props.mod === "moscow") {
    return (
      <div className="contact-card">
        <h3 className="contact-card__title">
          <a href="./pages/contacts/">Москва</a>
        </h3>
        <p className="contact-card__adress">
          ст. метро Проспект Мира
          <br /> ул. Гиляровского 57, стр. 1
          <br /> тел. +7 (905) 288 - 47 - 47
        </p>
      </div>
    );
  }
  if (props.mod === "petersburgh") {
    return (
      <div className="contact-card contact-card_text-right">
        <h3 className="contact-card__title">
          <a href="./pages/contacts/">С - Петербург</a>
        </h3>
        <p className="contact-card__adress">
          ст. метро Василеостровская
          <br /> 16 - я линия В.О., д. 39
          <br /> тел. +7 (981) 248 - 55 - 05
        </p>
      </div>
    );
  }
  return null;
}
export const consumers = ["src/compiled/tsx/index.js"];
