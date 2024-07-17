import React from "react";
import Image from "next/image";

import styles from "./wave7.module.scss";

const Wave7 = () => {
  return (
    <div className={styles["wave-7"]}>
      <Image src="/wave7.svg" alt="wave7" width={100} height={100} />
    </div>
  );
};

export default Wave7;
