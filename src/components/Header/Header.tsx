"use client";
import React from "react";
import { usePathname } from "next/navigation";
import HeaderDark from "./HeaderDark/HeaderDark";
import HeaderLight from "./HeaderLight/HeaderLight";
import BinaryDigits from "../BinaryDigits/BinaryDigits";
import { routes } from "@/routes";

import styles from "./header.module.scss";

type Props = {};

const theme = "light";

const Header = (props: Props) => {
  const pathname = usePathname();

  const getTheme = () => {
    const item = routes.find(route => route.href === pathname);
    return item?.theme;
  };

  // return getTheme() === "dark" ? (
  //   <>
  //     <HeaderDark />
  //   </>
  // ) : (
  //   <HeaderLight />
  // );

  return (
    <>
      <section style={getTheme() === "dark" ? {} : { display: "none" }}>
        <HeaderDark />
      </section>
      <section style={getTheme() === "dark" ? { display: "none" } : {}}>
        <HeaderLight />
      </section>
    </>
  );
};

export default Header;
