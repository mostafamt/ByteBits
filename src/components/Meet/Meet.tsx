import React from "react";
import Card from "../Card/Card";

import styles from "./meet.module.scss";

type Props = {};

const Meet = (props: Props) => {
  return (
    <div className="container">
      <div className={styles.meet}>
        <h2>Meet our team</h2>
        <div>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Meet;
