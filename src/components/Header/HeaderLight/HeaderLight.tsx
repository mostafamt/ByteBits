"use client";
import React from "react";
import Welcome from "@/components/Welcome/Welcome";
import Navbar from "@/components/Navbar/Navbar";

import styles from "./headerLight.module.scss";
import BinaryDigits from "@/components/BinaryDigits/BinaryDigits";
import { usePathname } from "next/navigation";

type Props = {};

const HeaderLight = (props: Props) => {
  const pathname = usePathname();
  return (
    <>
      <header
        className={styles["header-light"]}
        style={pathname === "/contact" ? { marginBottom: 0, height: "30rem" } : {}}
      >
        <BinaryDigits mode="light" footer={false} />
        <div className="container h-full">
          <Navbar theme="light" />
          <Welcome style={pathname === "/contact" ? { display: "none" } : {}} />
        </div>
      </header>
    </>
  );
};

export default HeaderLight;
