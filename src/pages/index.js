import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import sieu1 from "../images/sieu1.png";
import sieu2 from "../images/sieu2.png";

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`romania`, `autostrăzi`, `și eu`, `#șîeu`, `sieu`, `#sieu`, `romania vrea autostrazi`]}
      />

      <div className="text-center">
        <h2 className="bg-yellow inline-block my-8 p-3">
            Adevărul e că ne cam trebuie niște autostrăzi 🛣, nu credeți?!
        </h2>
        <a href="https://romaniavreaautostrazi.ro">
        <img
          src={sieu2}
          className="block mx-auto w-1/2"
          alt="Siglă Romania vrea autostrazi, parte a campaniei #șîeu"
        />
        </a>
        <h2 className="bg-yellow inline-block my-8 p-3">
            Fie autostrăzi... fie girofar 🚨.
        </h2>
        <a href="https://romaniavreaautostrazi.ro">
        <img
          src={sieu1}
          className="block mx-auto w-1/2"
          alt="Siglă Romania vrea autostrazi, parte a campaniei #șîeu"
        />
        </a>
      </div>
    </Layout>
  )
}

export default IndexPage;
