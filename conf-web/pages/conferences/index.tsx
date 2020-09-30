import React from "react";
import {GetStaticProps} from "next";
import Head from "next/head";
import {Conference} from "../../models/conference";
import Layout from "../../components/layout";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      conferences: [{
        "id": 1,
        "display_id": "goto",
        "name": "GOTO",
        "website": "https://gotocon.com",
        "logo_url": "https://pbs.twimg.com/profile_images/970998998541709313/JO1KXi8r_400x400.jpg",
        "created_at": "2020-09-26T23:40:05.099Z"
      }, {
        "id": 2,
        "display_id": "kubecon",
        "name": "KubeCon",
        "website": "https://kubecon.io",
        "logo_url": "https://pbs.twimg.com/profile_images/913421906157592576/NmxUeefn_400x400.jpg",
        "created_at": "2020-09-26T23:40:05.099Z"
      }]
    }
  }
}

export default function Conferences(props: { conferences: any[] }) {
  return <Layout>
    <Head>
      <title>Conferences</title>
    </Head>
    <div>
      {props.conferences.map(c => (
          <div key={c.id} className="card" style={{width: "18rem"}}>
            <img src={c.logo_url} className="card-img-top" alt="conference logo"/>
            <div className="card-body">
              <h5 className="card-title">{c.name}</h5>
              <p className="card-text">{c.description}</p>
              <a href={c.website} className="btn btn-primary" target="_blank">Homepage</a>
            </div>
          </div>
        )
      )}
    </div>
  </Layout>
}
