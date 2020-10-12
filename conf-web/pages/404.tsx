import React from "react";
import Head from "next/head";
import Link from "next/link";
import Layout, { SITE_TITLE } from "../components/layout";

export default function Custom404() {
  return (
    <Layout>
      <Head>
        <title>{SITE_TITLE} - Page Not Found</title>
      </Head>
      <div className="container">
        <div className="row">
          <h2>404 - END OF TRACK!</h2>
        </div>
        <section className="row">
          <div className="col">
            <Link href="/">🠔 Go Home</Link>
          </div>
        </section>
        <section className="row text-center">
          <div className="col">
            <figure className="figure">
              <img
                className="img-fluid rounded-circle"
                src="images/404.jpg"
                alt="page not found"
              />
              <figcaption className="figure-caption">
                The resource you are looking for is not found!
              </figcaption>
            </figure>
          </div>
        </section>
      </div>
    </Layout>
  );
}
