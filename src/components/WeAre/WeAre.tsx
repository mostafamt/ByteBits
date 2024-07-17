import Image from "next/image";
import React from "react";

import styles from "./weAre.module.scss";

type Props = {};

const WeAre = (props: Props) => {
  return (
    <div className="container">
      <div className={styles["we-are"]}>
        <div>
          <Image src="/sammy-line-web-design 1.png" alt="logo" width={600} height={600} />
        </div>
        <div>
          <h2>
            We are <span>Byte</span>
            <span>Bits</span>{" "}
          </h2>
          <p>
            We are a team of innovative thinkers, driven by a passion for technology and a
            commitment to excellence. We specialize in creating IT solutions that help businesses
            thrive in a rapidly evolving digital landscape. Our diverse backgrounds and skills
            enable us to tackle challenges with creativity and deliver results that exceed
            expectations. We are dedicated to open communication, customer-centric practices, and
            continuous improvement. At our core, we believe that technology has the power to
            transform businesses, and we are here to guide you on that journey. We are more than
            just IT experts; we are your partners in success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeAre;
