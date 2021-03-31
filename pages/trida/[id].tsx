import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";
import { Alert } from "../../components/alerts";
import { Navbar } from "../../components/navbar";
import { ProjectCard } from "../../components/project-card";
import { ITrida } from "../../src/models/types";
import { classes } from "../../src/projects";

interface IProps {
  trida: ITrida;
}

const TridaProjectsPage: React.FC<IProps> = ({ trida }) => {
  return (
    <div>
      <Head>
        <title>Třída {trida.title} - Maturitní projekty - Delta SŠIE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="py-5 mt-4">
        <div className="container">
          <div className="p-5 text-center bg-light">
            <h1 className="mb-3">Maturitní projekty</h1>
            <h4 className="mb-3">{trida.title}</h4>
          </div>
          {!trida.projects ||
            (trida.projects.length < 1 && (
              <Alert text="Tato třída nemá žádné projekty" />
            ))}
          {trida.projects && (
            <div className="row">
              {trida.projects.map((x, key) => (
                <div
                  key={`project-${key}`}
                  className="col-12 col-md-6 col-lg-4"
                >
                  <ProjectCard project={x} tridaBaseUrl={trida.domain} />
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default TridaProjectsPage;

export const getServerSideProps: GetServerSideProps<IProps> = async (
  context
) => {
  const tridaId = context.query.id.toString();

  const trida = classes.find((x) => x.unique === tridaId);

  if (!trida) {
    return {
      notFound: true,
    };
  }
  if (trida.projects) {
    const projs = trida.projects;
    trida.projects = projs.sort((a, b) => {
      /**
       *  Projects array won't sort correctly unless we do this terribleness
       *  But it will do for now
       */
      const l1 = a.authorName
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .split(" ")
        .reverse()[0];
      const l2 = b.authorName
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .split(" ")
        .reverse()[0];

      if (l1 < l2) return -1;
      if (l1 > l2) return 1;
      return 0;
    });
  }

  return {
    props: {
      trida,
    },
  };
};
