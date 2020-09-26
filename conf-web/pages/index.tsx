import React from "react";
import {GetStaticProps} from "next";
import Head from 'next/head'
import Link from "next/link";
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  }
}

export default function Home(props) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Poulad. I'm a software engineer interested in web technologies.</p>
        <p>
          Check out <Link href="talks/foo">this talk</Link>.
        </p>
      </section>
    </Layout>
  )
}
