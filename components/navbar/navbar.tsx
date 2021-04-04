import React from "react";
import Link from "next/link";
import { ClassSwitch } from "../class-switch";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <Link href="/">
          <span className="navbar-brand mb-0 h1 cursor-pointer">
            Maturitní projekty - Delta SŠIE
          </span>
        </Link>
        <ClassSwitch />
      </div>
    </nav>
  );
};

export default Navbar;
