import React from "react";

import styles from "./join.module.scss";
import JoinForm from "../Forms/JoinForm/JoinForm";
import ArrowIcon from "../../components/Icons/ArrowIcon";

type Props = {};

const Join = (props: Props) => {
  return (
    <div className={styles.join}>
      <div className="container">
        <div className={styles.arrow}>
          <ArrowIcon />
        </div>
        <h2>
          <span>Join</span> our team!
        </h2>
        <JoinForm />
      </div>
    </div>
  );
};

export default Join;
