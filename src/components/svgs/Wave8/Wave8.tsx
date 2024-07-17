import React from "react";
import Image from "next/image";

import styles from "./wave8.module.scss";

const Wave8 = () => {
  return (
    <div className={styles["wave-8"]}>
      <Image src="/line-2.svg" alt="line-2" width={250} height={250} />
    </div>
  );
};

export default Wave8;
