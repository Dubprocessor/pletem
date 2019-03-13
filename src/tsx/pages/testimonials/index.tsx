import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Layout } from "../../components/layout";
import { PageH1 } from "../../components/pageH1";
import { siteData } from "../../../ts/siteData";
import * as fs from "fs";

export default function Testimonials() {
  function getTestimoinals() {
    const data = siteData.testimonials.autors;
    const testimonials = [];
    for (const key in data) {
      const autor = key;
      const imgSrc = data[key][0];
      const socialLink = data[key][1];
      const text = data[key][2];
      testimonials.push(
        <div key={key} className="testimonial ">
          <img src={imgSrc} alt="автор отзыва" className="testimonial__img" />
          <a href={socialLink} target="_blank">
            <i className="fa fa-instagram fa-lg" aria-hidden="true" />
          </a>
          <h2 className="card-title">{autor}</h2>
          <p className="text-content text-content--testimonial">{text}</p>
        </div>
      );
    }
    return testimonials;
  }

  return renderToStaticMarkup(
    <Layout>
      <section>
        <PageH1 mod="testimonials" />
        <div className="container container--static">{getTestimoinals()}</div>
      </section>
    </Layout>
  );
}
