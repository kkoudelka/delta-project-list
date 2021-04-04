import Link from "next/link";
import React from "react";
import { classes } from "../../src/projects";

const ClassSwitch: React.FC = () => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-outline-primary dropdown-toggle"
        type="button"
        id="class-dropdown"
        data-mdb-toggle="dropdown"
        aria-expanded="false"
      >
        Výběr třídy
      </button>

      <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        {classes.map((c) => (
          <li key={`class-select-${c.unique}`}>
            <Link href={`/trida/${c.unique}`}>
              <a className="dropdown-item">{c.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClassSwitch;
