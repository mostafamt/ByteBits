import React from "react";
import Image from "next/image";

import styles from "./navbar.module.scss";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className={styles.nav}>
      <Image src="/logo.svg" alt="logo" width={250} height={64} />
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About us</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/team">Our team</a>
        </li>
      </ul>
      <button>become a client</button>
    </nav>
  );
};

export default Navbar;
