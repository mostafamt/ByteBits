import Image from "next/image";
import React from "react";

import styles from "./wave1.module.scss";

type Props = {};

const Wave1 = (props: Props) => {
  return (
    <div className={styles["wave-box"]}>
      <Image src="/wave1.svg" alt="logo" width={100} height={100} />
    </div>
  );
};

export default Wave1;
