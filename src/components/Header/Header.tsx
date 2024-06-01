"use client";
import React from "react";
import Welcome from "../Welcome/Welcome";
import { usePathname } from "next/navigation";

import styles from "./header.module.scss";
import Navbar from "../Navbar/Navbar";
import Wave from "../Wave/Wave";

type Props = {};

const Header = (props: Props) => {
  const pathname = usePathname();
  return (
    <>
      <header className={styles.header}>
        <div className="container mx-auto h-full">
          <Navbar />
          <Welcome />
        </div>
      </header>
      <Wave />
    </>
  );
};

export default Header;
