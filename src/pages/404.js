import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import abductionIllustration from "../images/abduction-illustration.svg";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: S-a furat pagina." />
      <div>
        <img
          src={abductionIllustration}
          className="block mx-auto w-1/2"
          alt="Ghost getting abducted by aliens"
        />
        <h2 className="bg-yellow inline-block my-8 p-3">
          Se pare că pagina pe care o cauți a fost furată sau răpită de extratereștri...
      </h2>
      </div>
    </Layout>
  )
}

export default NotFoundPage;
