import classnames from "classnames";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import { Navbar } from "../../components/navbar";
import { ooc } from "../../src/out-of-context";

const OutOfContextHomepage: React.FC = () => {
  const [showNsfw, setShowNsfw] = useState(false);

  const arr = showNsfw ? ooc : ooc.filter((x) => !x.nsfw);

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
            <h4 className="mb-3">Mimo souvislosti</h4>
            <div className="d-flex mt-4 justify-content-around">
              <Link href="/outofcontext/random">
                <a className="btn btn-primary">Zobrazit náhodný</a>
              </Link>
              <button
                className="btn btn-primary"
                onClick={(_) => setShowNsfw(!showNsfw)}
              >
                {!showNsfw ? "Zobrazit NSFW" : "Nezobrazovat NSFW"}
              </button>
            </div>
          </div>
          <div className="row lightbox">
            {arr.map((x, key) => (
              <div key={`ooc-${key}`} className="col-12 col-md-6 col-lg-3 p-3">
                <div className="image-16x9">
                  <img
                    src={`/out-of-context/${x.imageName}`}
                    alt={x.description ?? ""}
                    className={classnames(
                      "mask",
                      { "image-blur": x.nsfw },
                      "w-100 shadow-1-strong rounded hover-shadow"
                    )}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default OutOfContextHomepage;
