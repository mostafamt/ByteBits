"use client";
import React from "react";

import styles from "./binary-digits.module.scss";

type Props = {
  mode: string;
  footer: boolean;
};

const BinaryDigits = (props: Props) => {
  const [digits, setDigits] = React.useState("");

  React.useEffect(() => {
    const interval = setInterval(() => {
      console.log("This will run every second!");
      const newDigits = generateRandomBinaryDigits(5000);
      setDigits(newDigits);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const generateRandomBinaryDigits = (length: number) => {
    let str = "";
    for (let i = 0; i < length; i++) {
      const rand = Math.floor(Math.random() * 2);
      str = str + rand;
    }
    return str;
  };

  const divStyle = {
    background: props.footer
      ? `linear-gradient(to top, #496f8e, #011627)`
      : props.mode === "dark"
        ? `linear-gradient(to bottom, #496f8e, #011627)`
        : `linear-gradient(to bottom, #011627, #32C5B7)`,
    WebkitBackgroundClip: "text",
    transform: props.footer
      ? "rotate(-5deg) translate(0, 6rem)"
      : "rotate(15deg) translate(22rem, -20rem)",
    height: props.footer ? "18rem" : "39rem",
  };

  return (
    <div className={styles["binary-digits"]}>
      <div style={divStyle}>{digits}</div>
    </div>
  );
};

export default BinaryDigits;
