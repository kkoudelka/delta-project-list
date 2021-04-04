import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Navbar } from "../../components/navbar";
import { IOutOfContext } from "../../src/models/types";
import { ooc } from "../../src/out-of-context";
import useClipboard from "react-use-clipboard";

interface IProps {
  item: IOutOfContext;
}

const OutOfContextItemPage: React.FC<IProps> = ({ item }) => {
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
            <img
              src={`/out-of-context/${item.imageName}`}
              alt={item.description ?? ""}
              className="shadow-1-strong rounded hover-shadow"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default OutOfContextItemPage;

export const getServerSideProps: GetServerSideProps<IProps> = async (
  context
) => {
  const fileName = context.query.name.toString();

  if (!fileName) {
    return {
      notFound: true,
    };
  }

  const item = ooc.find((x) => x.imageName === fileName);

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
