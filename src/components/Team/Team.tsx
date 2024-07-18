import React from "react";

import styles from "./team.module.scss";
import Card from "../Card/Card";

type Props = {
  children: React.ReactNode;
};

const Team = (props: Props) => {
  return (
    <div className={styles.team}>
      <div className="container">
        <div>
          <h2>
            <span>Meet</span> Our <span>team</span>{" "}
          </h2>
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default Team;
