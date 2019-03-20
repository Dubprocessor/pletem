import * as React from "react";
import decache from "decache";

import { renderToStaticMarkup } from "react-dom/server";
import { Layout } from "../../components/layout";
import { PageH1 } from "../../components/pageH1";
import { CheckBox } from "../../components/checkBox";

import { siteData } from "../../../ts/siteData";
decache("../../../ts/siteData");

export default function Prices() {
  const tabs = Object.entries(siteData.prices.tabs).map((element, index) => {
    return (
      <div key={index}>
        <input
          id={`ac-${index + 1}`}
          className="accordion__input"
          name="accordion"
          type="radio"
          defaultChecked={index === 0 ? true : false}
        />
        <label htmlFor={`ac-${index + 1}`} className="accordion__label">
          {element[0]}
        </label>
        <div className="accordion__article">
          <p>{element[1]}</p>
        </div>
      </div>
    );
  });
  return renderToStaticMarkup(
    <Layout>
      <section>
        <PageH1 mod="prices" />
        <div className="container container--static">
          <div className="tabs">{tabs}</div>
          <div className="calc">
            <form>
              <fieldset>
                <legend>Длина волос</legend>
                <CheckBox label="до 30 см" id="length-1" name="length" value="1500" />
                <CheckBox label="до 45 см" id="length-2" name="length" value="3000" />
                <CheckBox label="до 60 см" id="length-3" name="length" value="6000" />
                <CheckBox label="свыше 60 см " id="length-4" name="length" value="8000" />
              </fieldset>
              <fieldset>
                <legend>Вид косичек</legend>
                <CheckBox label="Классисечские афрокосички" id="kind-1" name="kind" value="1500" />
                <CheckBox label="Ганские косички - брейды" id="kind-2" name="kind" value="3000" />
                <CheckBox label="Афрокосички зизи" id="kind-3" name="kind" value="6000" />
              </fieldset>
              <input className="calc__submit" type="submit" value="Показать стоимость" />
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
