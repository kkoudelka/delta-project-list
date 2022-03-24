import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Navbar } from "../components/navbar";
import { ProjectCard } from "../components/project-card";
import { TridaCard } from "../components/trida-card";
import { getTridaForProject } from "../src/models/helpers";
import { IKeywordProjects, IProject } from "../src/models/types";
import { classes } from "../src/projects";

interface IProps {
  keywordProjects: IKeywordProjects[];
}

const KeywordPage: React.FC<IProps> = ({ keywordProjects }) => {
  return (
    <div>
      <Head>
        <title>Keywords - Maturitní projekty - Delta SŠIE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="py-5 mt-4">
        <div className="container">
          <div className="p-5 text-center bg-light mb-4">
            <h1 className="mb-3">Maturitní projekty - Keywords</h1>
            <Link href="/outofcontext">
              <h4 className="mb-3">Delta - SŠIE</h4>
            </Link>
          </div>

          <div className="list-group list-group-horizontal flex-wrap list-group-flush">
            {keywordProjects.map((x, i) => (
              <div key={i} className="px-1 py-1">
                <Link key={i} href={`#keyword-${i}`} passHref>
                  <div className="btn btn-sm btn-outline-primary">
                    {x.keyword} ({x.projects.length ?? 0})
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {keywordProjects.map((a, i) => (
            <div key={i}>
              <div className="row my-2">
                <div className="col-12">
                  <h3 className="h3-responsive" id={`keyword-${i}`}>
                    {a.keyword}
                  </h3>
                </div>
                {a.projects.map((x, y) => (
                  <div key={`proj-${y}`} className="col-12 col-md-6 col-lg-4">
                    <ProjectCard
                      project={x.project}
                      tridaBaseUrl={x.tridaBaseUrl}
                    />
                  </div>
                ))}
              </div>
              <hr className="my-1" />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default KeywordPage;

export const getStaticProps: GetStaticProps<IProps> = async (context) => {
  // take projects from each className into a variable
  const projects: IProject[] = classes.reduce((acc, curr) => {
    return [...acc, ...curr.projects];
  }, []);

  // group projects by each keyword
  const keywordProjects: IKeywordProjects[] = [];
  projects.forEach((x) => {
    const trida = getTridaForProject(x);
    if (x.keywords) {
      x.keywords.forEach((y) => {
        const keywordProject = keywordProjects.find(
          (z) => z.keyword.toLowerCase() === y.toLowerCase()
        );
        if (keywordProject) {
          keywordProject.projects.push({
            project: x,
            tridaBaseUrl: trida.domain,
          });
        } else {
          keywordProjects.push({
            keyword: y,
            projects: [{ project: x, tridaBaseUrl: trida.domain }],
          });
        }
      });
    }
  });

  // order keywords alphabetically case insensitive
  const sorted = keywordProjects.sort((a, b) => {
    if (a.keyword.toLowerCase() < b.keyword.toLowerCase()) {
      return -1;
    }
    if (a.keyword.toLowerCase() > b.keyword.toLowerCase()) {
      return 1;
    }
    return 0;
  });

  return {
    props: {
      keywordProjects: sorted,
    },
  };
};
