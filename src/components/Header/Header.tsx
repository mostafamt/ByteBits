"use client";
import React from "react";
import { usePathname } from "next/navigation";
import HeaderDark from "./HeaderDark/HeaderDark";
import HeaderLight from "./HeaderLight/HeaderLight";

import styles from "./header.module.scss";
import { routes } from "@/routes";

type Props = {};

const theme = "light";

const Header = (props: Props) => {
  const pathname = usePathname();

  const getTheme = () => {
    const item = routes.find(route => route.href === pathname);
    return item?.theme;
  };

  return getTheme() === "dark" ? <HeaderDark /> : <HeaderLight />;
};

export default Header;
