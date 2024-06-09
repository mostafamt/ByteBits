import React from "react";

import styles from "./values.module.scss";
import { values } from "@/config";

type Props = {};

const Values = (props: Props) => {
  return (
    <div className="container">
      <div className={styles.values}>
        <div>
          <h2>Our Values</h2>
          <p>
            At ByteBits, we provide a range of IT services designed for modern businesses. Our team
            of remote experts specializes in software development, crafting reliable and tailored
            solutions. We create intuitive web and mobile applications, ensuring excellent user
            experiences across all platforms.
          </p>
        </div>
        <div>
          {values.map((value, idx) => (
            <div key={value.header} >
              <h4>
                <span style={{backgroundColor: value.color}} >{idx + 1}</span>
                <span>{value.header}</span>
              </h4>
              <p>{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Values;
