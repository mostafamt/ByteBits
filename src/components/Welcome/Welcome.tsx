import React from "react";

import styles from "./welcome.module.scss";

type Props = {};

const Welcome = (props: Props) => {
  return (
    <section className={styles.welcome}>
      <div>
        <h1>Welcome.</h1>
        <p>I love god, I love you, I love all!</p>
      </div>
    </section>
  );
};

export default Welcome;
