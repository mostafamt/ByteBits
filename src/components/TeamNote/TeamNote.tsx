import React from "react";

import styles from "./teamNote.module.scss";

type Props = {};

const TeamNote = (props: Props) => {
  return (
    <div className={styles["team-note"]}>Feel like you may fit in? Introduce yourself to us!</div>
  );
};

export default TeamNote;
