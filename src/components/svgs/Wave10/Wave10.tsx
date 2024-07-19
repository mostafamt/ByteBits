import React from "react";
import Image from "next/image";

import styles from "./wave10.module.scss";

type Props = {};

const Wave10 = (props: Props) => {
  return (
    <div className={styles["wave-10"]}>
      <Image src="/wave10.svg" alt="wave10" width={250} height={250} />
    </div>
  );
};

export default Wave10;
