import React, { Fragment } from "react";
import Interpolate from "@doist/react-interpolate";

import Url from "@/components/Url";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";

import content from "@/data/content.json";

export { default as Head } from "@/components/Head";

export default () => {
  const urls = {
    url1: <Url href="https://qed.builders" />,
    url2: (
      <Url href="https://www.zf.ro/business-hi-tech/tranzactie-in-segmentul-web3-metaverse-the-sandbox-achizitioneaza-un-22681801" />
    ),
    url3: <Url href="https://sandbox.game" />,
    url4: <Url href="https://povestidinsport.substack.com/p/cum-imbina-un-antreprenor-timisorean" />,
    url5: <Url href="https://www.lacan.com/seminars1a.htm" />,
    url6: <Url href="https://en.wikipedia.org/wiki/Simulacra_and_Simulation" />,
    url7: <Url href="https://en.wikipedia.org/wiki/The_Road_to_Serfdom" />,
    url8: <Url href="https://en.wikipedia.org/wiki/Richard_Feynman" />,
    url9: <Url href="mailto:marius@qed.builders" />,
    strike: <span className="text-gray-100 line-through" />,
  };

  return (
    <Layout>
      <div className="flex flex-col gap-8">
        <Header />

        {content.map((text) => (
          <Fragment key={text}>
            <p>
              <Interpolate string={text} mapping={urls} />
            </p>
          </Fragment>
        ))}

        <Footer />
      </div>
    </Layout>
  );
};
