import React from "react";

import styles from "./wave9.module.scss";
import Image from "next/image";

type Props = {};

const Wave9 = (props: Props) => {
  return (
    <div className={styles["wave-9"]}>
      <Image src="/wave9.svg" alt="wave9" width={250} height={250} />
    </div>
  );
};

export default Wave9;
