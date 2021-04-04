import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Navbar } from "../components/navbar";
import { TridaCard } from "../components/trida-card";
import { classes } from "../src/projects";

const OutOfContextPage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Out of context - Maturitní projekty - Delta SŠIE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="py-5 mt-4">
        <div className="container">
          <div className="p-5 text-center bg-light mb-2">
            <h1 className="mb-3">Maturitní projekty</h1>
            <h4 className="mb-3">Delta - SŠIE</h4>
          </div>
          <div
            className="alert my-3 alert-primary"
            role="alert"
            data-mdb-color="primary"
          >
            <strong>Aktuální téma!</strong>&nbsp;Kam mám poslat spolužáka, když
            neví, kam strčit web?&nbsp;
            <Link href="/faq">
              <a className="text-decoration-underline">Zobrazit FAQ</a>
            </Link>
          </div>
          <div className="row">
            {classes.map((x) => (
              <div
                key={`trida-${x.unique}`}
                className="col-12 col-md-6 col-lg-3"
              >
                <TridaCard trida={x} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default OutOfContextPage;
