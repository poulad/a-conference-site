import React from "react";
import {GetStaticPaths, GetStaticProps} from "next";
import Head from "next/head";
import Layout from "../../components/layout";

export const getStaticPaths: GetStaticPaths = async () => {
  // TODO fetch talk by its title from DB
  return {
    paths: [
      {params: {title: "foo"}},
      {params: {title: "bar"}},
      {params: {title: "baz"}},
    ],
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  // TODO get value
  return {
    props: {
      title: params.title,
      speaker: "John Smith"
    }
  }
}

export default function Talk(props) {
  return <Layout>
    <Head>
      <title>{props.title} - {props.speaker}</title>
    </Head>
    <h3>{props.title}</h3>
    <h5>By {props.speaker}</h5>
  </Layout>
}