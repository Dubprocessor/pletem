import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Layout } from "../../components/layout";
import { PageH1 } from "../../components/pageH1";
import { siteData } from "../../../ts/siteData";

export default function Faq() {
  const accordion = Object.entries(siteData.faq.accordion).map((element, index) => {
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
        <PageH1 mod="faq" />
        <div className="accordion">{accordion}</div>
      </section>
    </Layout>
  );
}
