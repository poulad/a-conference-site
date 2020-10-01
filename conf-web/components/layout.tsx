import React, {useState} from "react";
import Head from "next/head"
import Header from "./header";
import Footer from "./footer";

export const siteTitle = 'A Conference Site';

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void
}

export const ThemeContext = React.createContext({} as ThemeContextType)

export default function Layout({children, home = null}) {
  const [theme, setTheme] = useState("light")
  const themeContextValue: ThemeContextType = {theme, setTheme}

  return <>
    <Head>
      <link rel="icon" href="/favicon.ico"/>
      <meta
        name="description"
        content="Learn how to build a personal website using Next.js"
      />
      <meta name="og:title" content={siteTitle}/>
      <meta name="twitter:card" content="summary_large_image"/>
      <title>{siteTitle}</title>
      <link
        rel="stylesheet"
        href={theme === "light" ? "https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/flatly/bootstrap.min.css" : "https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/darkly/bootstrap.min.css"}
        integrity={theme === "light" ? "sha384-qF/QmIAj5ZaYFAeQcrQ6bfVMAh4zZlrGwTPY7T/M+iTTLJqJBJjwwnsE5Y0mV7QK" : "sha384-nNK9n28pDUDDgIiIqZ/MiyO3F4/9vsMtReZK39klb/MtkZI3/LtjSjlmyVPS3KdN"}
        crossOrigin="anonymous"
      />
    </Head>
    <ThemeContext.Provider value={themeContextValue}>
      <Header/>
      <main role="main">{children}</main>
      <Footer/>
    </ThemeContext.Provider>
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
  </>;
}
