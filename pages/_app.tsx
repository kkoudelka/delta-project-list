import "../styles/mdb.min.css";
import "../styles/globals.css";
import React from "react";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"
        />
      </Head>
      <Component {...pageProps} />
      <script type="text/javascript" src="/js/mdb.min.js"></script>
    </div>
  );
};

export default MyApp;
