"use client";
import React from "react";
import Welcome from "@/components/Welcome/Welcome";
import Navbar from "@/components/Navbar/Navbar";
import BinaryDigits from "@/components/BinaryDigits/BinaryDigits";
import Wave1 from "@/components/svgs/Wave1/Wave1";
import Wave2 from "@/components/svgs/Wave2/Wave2";

import styles from "./headerDark.module.scss";

type Props = {};

const HeaderDark = (props: Props) => {
  return (
    <>
      <header className={styles["header-dark"]}>
        <BinaryDigits mode="dark" footer={false} />
        <div className="container h-full">
          <Navbar theme="dark" />
          <Welcome style={{}} />
        </div>
        <Wave1 />
        <Wave2 />
      </header>
    </>
  );
};

export default HeaderDark;
