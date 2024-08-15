"use client";
import React from "react";

import styles from "./binary-digits.module.scss";

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
  const [digits, setDigits] = React.useState("");

  React.useEffect(() => {
    const interval = setInterval(() => {
      console.log("This will run every second!");
      const newDigits = generateRandomBinaryDigits(5000);
      setDigits(newDigits);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles["binary-digits"]}>
      <div
        className={
          props.footer
            ? styles.footer
            : props.mode === "dark"
              ? styles["header-dark"]
              : styles["header-light"]
        }
      >
        {digits}
      </div>
    </div>
  );
};

export default BinaryDigits;
