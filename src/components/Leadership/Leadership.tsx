import React from "react";

import styles from "./leadership.module.scss";
import Card from "../Card/Card";

type Props = {};

const Leadership = (props: Props) => {
  return (
    <div className={`container ${styles.leadership}`}>
      <h3>Leadership</h3>
      <div className={styles.cards}>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Leadership;
