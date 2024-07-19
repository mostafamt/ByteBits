import React from "react";

import styles from "./meetTeam.module.scss";

type Props = {};

const MeetTeam = (props: Props) => {
  return (
    <div className={`container ${styles["meet-team"]}`}>
      <h2>
        <span>Meet</span> Our <span>team</span>{" "}
      </h2>
    </div>
  );
};

export default MeetTeam;
