"use client";
import React from "react";
import Welcome from "@/components/Welcome/Welcome";
import Navbar from "@/components/Navbar/Navbar";
import Wave1 from "@/components/Wave1/Wave1";
import Wave2 from "@/components/Wave2/Wave2";

import styles from "./headerDark.module.scss";

type Props = {};

const HeaderDark = (props: Props) => {
  return (
    <>
      <header className={styles["header-dark"]}>
        <div className="container h-full">
          <Navbar theme="dark" />
          <Welcome />
        </div>
        <Wave1 />
        <Wave2 />
      </header>
    </>
  );
};

export default HeaderDark;
