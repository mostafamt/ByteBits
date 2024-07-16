"use client";
import React from "react";
import Welcome from "@/components/Welcome/Welcome";
import Navbar from "@/components/Navbar/Navbar";

import styles from "./headerLight.module.scss";
import BinaryDigits from "@/components/BinaryDigits/BinaryDigits";

type Props = {};

const HeaderLight = (props: Props) => {
  return (
    <>
      <header className={styles["header-light"]}>
        <BinaryDigits mode="light" footer={false} />
        <div className="container h-full">
          <Navbar theme="light" />
          <Welcome />
        </div>
      </header>
    </>
  );
};

export default HeaderLight;
