import React from "react";

import styles from "./join.module.scss";
import JoinForm from "../JoinForm/JoinForm";

type Props = {};

const Join = (props: Props) => {
  return (
    <div className={styles.join}>
      <div className="container">
        <h2>
          <span>Join</span> our team!
        </h2>
        <JoinForm />
      </div>
    </div>
  );
};

export default Join;
