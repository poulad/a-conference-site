import React from "react";
import { GetStaticProps } from "next";
import Link from "next/link";
import Layout, { SITE_TITLE } from "../components/layout";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default function Home(props) {
  return (
    <Layout>
      <section className="jumbotron text-center">
        <div className="container">
          <h1>Conferences in Software Community</h1>
          <p className="lead">
            Find <Link href="/conferences">conferences</Link> to attend,
            interesting <Link href="/talks">talks</Link> to watch, or connect
            with <Link href="/speakers">speakers</Link> from around the globe.
          </p>
          <p>
            <a href="#" className="btn btn-primary my-2">
              Main call to action
            </a>
            <a href="#" className="btn btn-secondary my-2">
              Secondary action
            </a>
          </p>
        </div>
      </section>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                {/*{% include icons/placeholder.svg width="100%" height="225" background="#55595c" color="#eceeef" class="card-img-top" text="Thumbnail" %}*/}
                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
