import React from "react";
import { IProject } from "../../src/models/types";

interface IProps {
  project: IProject;
  tridaBaseUrl: string;
}

const TridaCard: React.FC<IProps> = ({ project, tridaBaseUrl }) => {
  const link = `${project.https ? "https" : "http"}://${
    project.subdomain
  }.${tridaBaseUrl}${project.inRoot ? "" : "/maturita"}`;

  return (
    <div className="p-2 py-4 h-100">
      <div className="card text-center h-100">
        <div className="card-body h-100">
          <h4 className="card-title" style={{ minHeight: 55 }}>
            {project.title}
          </h4>
          <h5 className="card-text">{project.authorName}</h5>
          {project.consultantName && (
            <p className="card-text">Vedoucí: {project.consultantName}</p>
          )}
          <a className="btn btn-primary mt-2" target="_blank" href={link}>
            Zobrazit projekt
          </a>
        </div>
      </div>
    </div>
  );
};

export default TridaCard;
