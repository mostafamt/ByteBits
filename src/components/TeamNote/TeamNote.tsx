import React from "react";

import styles from "./teamNote.module.scss";

type Props = {
  children: React.ReactNode;
};

const TeamNote = (props: Props) => {
  return <div className={styles["team-note"]}>{props.children}</div>;
};

export default TeamNote;
