import React, { useEffect, useState } from "react";
import Head from "next/head";
import Axios from "axios";
import Layout from "../../components/layout";
import { Conference } from "../../models/conference";
import { AppSettings, getAppSettings } from "../../providers/settings";
import { GetStaticProps } from "next";

interface Props {
  settings: AppSettings
}

export const getStaticProps: GetStaticProps = async _ => {
  return {
    props: {
      settings: getAppSettings()
    } as Props
  }
}

export default function Conferences(props: Props) {
  const [conferences, setConferences] = useState([] as Conference[])

  useEffect(() => {
    Axios.get(`${props.settings.CONF_API_BASE_URL}/api/conferences`)
      .then(resp => setConferences(resp.data))
      .catch(console.warn)
  }, [])

  return <Layout>
    <Head>
      <title>Conferences</title>
    </Head>
    <div>
      {conferences.map(c => (
        <div key={c.id} className="card" style={{ width: "18rem" }}>
          <img src={c.logo_url} className="card-img-top" alt="conference logo" />
          <div className="card-body">
            <h5 className="card-title">{c.name}</h5>
            <p className="card-text">{c.description}</p>
            <a href={c.website} className="btn btn-primary" target="_blank">
              Check Homepage
                <img src="https://unpkg.com/bootstrap-icons@%5E1/icons/box-arrow-up-right.svg" alt="offsite link" />
            </a>
          </div>
        </div>
      )
      )}
    </div>
  </Layout>
}
