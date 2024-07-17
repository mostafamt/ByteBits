import React from "react";

import styles from "./creative.module.scss";
import Image from "next/image";

type Props = {};

const Creative = (props: Props) => {
  return (
    <div className="container">
      <div className={styles.creative}>
        <h2>
          Creative • Passionate • <span>Experts</span>
        </h2>
        <div>
          <p>
            Our team is a dynamic group of talented professionals with a passion for technology and
            a commitment to excellence. With diverse backgrounds and a wide range of expertise, we
            bring fresh perspectives to every project. Each member of our team is dedicated to
            providing innovative solutions and outstanding customer service. We believe in open
            communication, collaboration, and continuous learning to stay ahead in the fast-paced IT
            industry. Meet the individuals who make it all happen, and discover how their skills and
            dedication drive our success and yours.
          </p>
          <Image src="/team.svg" alt="team" width={600} height={600} />
        </div>
      </div>
    </div>
  );
};

export default Creative;
