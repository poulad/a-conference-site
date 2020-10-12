import React, { useEffect, useState } from "react";
import Head from "next/head";
import Axios from "axios";
import Layout from "../../components/layout";
import { Conference } from "../../models/conference";
import { AppSettings, getAppSettings } from "../../providers/settings";
import { GetStaticProps } from "next";
import useAsyncHook from "../../services/use-async-hook";
import Spinner from "../../components/spinner";

interface Props {
  settings: AppSettings;
}

function renderConferenceCard(conf: Conference): JSX.Element {
  return (
    <div key={conf.id} className="col mb-4">
      <div className="card">
        <img
          src={conf.logo_url}
          className="card-img-top"
          alt="conference logo"
          style={{
            backgroundColor: conf.logo_dark_bg ? "#303030" : "white",
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{conf.name}</h5>
          <p className="card-text">{conf.description}</p>
          <a href={conf.website} className="btn btn-primary" target="_blank">
            Check Homepage
            <img
              src="https://unpkg.com/bootstrap-icons@%5E1/icons/box-arrow-up-right.svg"
              alt="offsite link"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (_) => {
  return {
    props: {
      settings: getAppSettings(),
    } as Props,
  };
};

export default function Conferences(props: Props) {
  const [conferences, setConferences] = useState([] as Conference[]);
  const [error, setError] = useState(null as Error);
  const [loading, setLoading] = useState(true);

  useAsyncHook(
    async () => {
      const resp = await Axios.get(
        `${props.settings.CONF_API_BASE_URL}/api/conferences`
      );
      setConferences(resp.data);
    },
    setError,
    () => setLoading(false),
    null,
    []
  );

  if (error) throw error;

  return (
    <Layout>
      <Head>
        <title>Conferences</title>
      </Head>
      <div className="container">
        <div className="row">
          <h1>Conferences</h1>
        </div>
        {loading ? (
          <Spinner message="loading latest conferences..." />
        ) : (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
            {conferences.map(renderConferenceCard)}
          </div>
        )}
      </div>
    </Layout>
  );
}
