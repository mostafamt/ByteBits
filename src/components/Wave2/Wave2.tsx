import Image from "next/image";
import React from "react";

import styles from "./wave2.module.scss";

type Props = {};

const Wave2 = (props: Props) => {
  return (
    <div className={styles["wave-box"]}>
      <Image src="/wave2.svg" alt="logo" width={100} height={100} />
    </div>
  );
};

export default Wave2;
