import React from "react";
import Wave9 from "../svgs/Wave9/Wave9";
import Wave10 from "../svgs/Wave10/Wave10";

import styles from "./team.module.scss";

type Props = {
  children: React.ReactNode;
};

const Team = (props: Props) => {
  return (
    <div className={styles.team}>
      <Wave10 />
      <Wave9 />
      {props.children}
    </div>
  );
};

export default Team;
