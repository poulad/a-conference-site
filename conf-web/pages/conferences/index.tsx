import React from "react";
import {GetStaticProps} from "next";
import Layout from "../../components/layout";
import {Conference} from "../../models/conference";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      conferences: [
        {id: 'goto', name: "GOTO",},
        {id: 'kubecon', name: "KubeCon",},
      ]
    }
  }
}

export default function Conferences(props: { conferences: Conference[] }) {
  return <Layout>
    <ul>
      {props.conferences.map(c => <li key={c.id}>{c.name}</li>)}
    </ul>
  </Layout>
}
