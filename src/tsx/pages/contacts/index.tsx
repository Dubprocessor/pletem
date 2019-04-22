import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Layout } from "../../components/layout";
import { PageH1 } from "../../components/pageH1";
import { EmailForm } from "../../components/emailForm";

export default function Contacts() {
  return renderToStaticMarkup(
    <Layout mod="contacts">
      <section>
        <PageH1 mod="contacts" />
        <div className="mapRefsContainer">
          <a id="moscowRef1" href="./">Москва</a>
          <a id="spbRef1" href="./">С - Петербург</a>
        </div>
        <div className="contacts">
          <div id="map" className="contacts__map">
            map will be here!
          </div>
          <EmailForm />
        </div>
      </section>
    </Layout>
  );
}
