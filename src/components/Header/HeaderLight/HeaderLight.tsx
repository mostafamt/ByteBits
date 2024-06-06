"use client";
import React from "react";
import Welcome from "@/components/Welcome/Welcome";
import Navbar from "@/components/Navbar/Navbar";

import styles from "./headerLight.module.scss";

type Props = {};

const HeaderLight = (props: Props) => {
  return (
    <>
      <header className={styles["header-light"]}>
        <div className="container h-full">
          <Navbar theme="light" />
          <Welcome />
        </div>
      </header>
    </>
  );
};

export default HeaderLight;
