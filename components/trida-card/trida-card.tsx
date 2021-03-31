import Link from "next/link";
import React from "react";
import { ITrida } from "../../src/models/types";

interface IProps {
  trida: ITrida;
}

const TridaCard: React.FC<IProps> = ({ trida }) => {
  return (
    <div className="card m-2 py-4 text-center">
      <div className="card-body">
        <h4 className="card-title my-2">{trida.title}</h4>
        <Link href={`/trida/${trida.unique}`}>
          <a className="btn btn-primary my-2">Zobrazit projekty</a>
        </Link>
      </div>
    </div>
  );
};

export default TridaCard;
