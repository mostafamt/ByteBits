import React from "react";
import Image from "next/image";

import styles from "./wave6.module.scss";

const Wave6 = () => {
  return (
    <div className={styles["wave-6"]}>
      <Image src="/wave6.svg" alt="wave6" width={100} height={100} />
    </div>
  );
};

export default Wave6;
