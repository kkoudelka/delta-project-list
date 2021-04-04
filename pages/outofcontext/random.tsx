import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/navbar";
import { getRandomFromArray } from "../../src/models/helpers";
import { IOutOfContext } from "../../src/models/types";
import { ooc } from "../../src/out-of-context";
import useClipboard from "react-use-clipboard";

interface IProps {
  item: IOutOfContext;
}

const OutOfContextRandom: React.FC<IProps> = ({ item }) => {
  const [showNsfw, setShowNsfw] = useState(!item.nsfw);

  useEffect(() => {
    setShowNsfw(!item.nsfw);
  }, [item]);

  const [isCopied, setCopied] = useClipboard(
    `https://delta-project-list.vercel.app/outofcontext/${item.imageName}`,
    {
      // `isCopied` will go back to `false` after 1000ms.
      successDuration: 3000,
    }
  );

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
                <a className="btn btn-primary">Další náhodně</a>
              </Link>
              <Link href="/outofcontext">
                <a className="btn btn-primary">Zobrazit vše</a>
              </Link>
              <button onClick={setCopied} className="btn btn-primary">
                {!isCopied ? "Kopírovat link" : "Zkopírováno 👍"}
              </button>
            </div>
          </div>
          <div className="d-flex lightbox justify-content-center mt-3">
            {showNsfw && (
              <img
                src={`/out-of-context/${item.imageName}`}
                alt={item.description ?? ""}
                className="shadow-1-strong rounded hover-shadow"
              />
            )}
            {!showNsfw && (
              <div className="bg-image">
                <img
                  src={`/out-of-context/${item.imageName}`}
                  alt={item.description ?? ""}
                />
                <div className="mask image-blur">
                  <div className="d-flex flex-column justify-content-center align-items-center h-100">
                    <h3 className="mb-2">NSFW</h3>
                    <button
                      className="btn btn-primary"
                      onClick={(_) => setShowNsfw(true)}
                    >
                      Zobrazit
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default OutOfContextRandom;

export const getServerSideProps: GetServerSideProps<IProps> = async (
  context
) => {
  const item = getRandomFromArray(ooc);

  if (!item) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      item,
    },
  };
};
