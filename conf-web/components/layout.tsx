import React, { useContext } from "react";
import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import { ThemeContext } from "../pages/_app";

export const siteTitle = "A Conference Site";

export default function Layout({ children, home = null }) {
  const themeContextValue = useContext(ThemeContext);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{siteTitle}</title>
        <link
          rel="stylesheet"
          href={
            themeContextValue.theme === "light"
              ? "https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/flatly/bootstrap.min.css"
              : "https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/darkly/bootstrap.min.css"
          }
          integrity={
            themeContextValue.theme === "light"
              ? "sha384-qF/QmIAj5ZaYFAeQcrQ6bfVMAh4zZlrGwTPY7T/M+iTTLJqJBJjwwnsE5Y0mV7QK"
              : "sha384-nNK9n28pDUDDgIiIqZ/MiyO3F4/9vsMtReZK39klb/MtkZI3/LtjSjlmyVPS3KdN"
          }
          crossOrigin="anonymous"
        />
      </Head>
      <Header />
      <main role="main">{children}</main>
      <Footer />
      {/*<header>*/}
      {/*  {home ? (*/}
      {/*    <>*/}
      {/*      <img src="/images/profile.jpg" alt={name}/>*/}
      {/*      <h1>{name}</h1>*/}
      {/*    </>*/}
      {/*  ) : (*/}
      {/*    <>*/}
      {/*      <Link href="/">*/}
      {/*        <a>*/}
      {/*          <img src="/images/profile.jpg" alt={name}/>*/}
      {/*        </a>*/}
      {/*      </Link>*/}
      {/*      <h2>*/}
      {/*        <Link href="/">*/}
      {/*          <a>{name}</a>*/}
      {/*        </Link>*/}
      {/*      </h2>*/}
      {/*    </>*/}
      {/*  )}*/}
      {/*</header>*/}

      {/*{!home && (*/}
      {/*  <div>*/}
      {/*    <Link href="/">*/}
      {/*      <a>← Back to home</a>*/}
      {/*    </Link>*/}
      {/*  </div>*/}
      {/*)}*/}
    </>
  );
}
