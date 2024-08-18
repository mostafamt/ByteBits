"use client";
import React from "react";

import styles from "./binary-digits.module.scss";
import useShiftingStrings from "./useShiftingStrings";
type Props = {
  mode: string;
  footer: boolean;
};

const generateRandomBinaryDigits = (length: number) => {
  let str = "";
  for (let i = 0; i < length; i++) {
    const rand = Math.floor(Math.random() * 2);
    str = str + rand;
  }
  return str;
};

const BinaryDigits = (props: Props) => {
  const binaryStrings = useShiftingStrings("10");

  const divStyle = {
    background: props.footer
      ? `linear-gradient(to top, rgba(100, 100, 100, 0.5) -30%, rgba(1, 22, 39, 0.21) 70%)`
      : props.mode === "dark"
        ? `linear-gradient(to bottom, rgba(100, 100, 100, 0.5) -30%, rgba(1, 22, 39, 0.21) 70%)`
        : `linear-gradient(to bottom, rgba(1, 22, 39, 0.4) -30%, rgba(50, 197, 183, 0) 70%)`,
    WebkitBackgroundClip: "text",
    transform: props.footer
      ? "rotate(-5deg) translate(0, 6rem)"
      : "rotate(15deg) translate(22rem, -20rem)",
    height: props.footer ? "18rem" : "39rem",
    top: props.footer ? "0 !important" : "",
    left: props.footer ? "0 !important" : "",
  };

  return props.footer ? (
    <div className={styles["binary-digits-footer"]}>
      <div style={divStyle}>
        {binaryStrings.map((bs, index) => (
          <span style={{ animationDelay: `${bs.delay}ms` }} key={index}>
            {bs.string}
          </span>
        ))}
      </div>
    </div>
  ) : (
    <div className={styles["binary-digits"]}>
      <div style={divStyle}>
        {binaryStrings.map((bs, index) => (
          <span style={{ animationDelay: `${bs.delay}ms` }} key={index}>
            {bs.string}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BinaryDigits;
