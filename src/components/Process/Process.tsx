import React from "react";
import Wave6 from "@/components/svgs/Wave6/Wave6";
import Wave7 from "@/components/svgs/Wave7/Wave7";

import styles from "./process.module.scss";

type Props = {};

const data = [
  {
    header: "Meet with you",
    text: "Gather requirements, understand your needs, and clarify any ambiguities.",
  },
  {
    header: "Give a quote",
    text: "Defining the scope, estimating costs, and presenting the details.",
  },
  {
    header: "Development and Testing",
    text: "Project development, unit testing, integration testing, and user acceptance testing",
  },
  {
    header: "Deployment and Maintenance",
    text: "Deploy the software to the production environment, making it available for use by end-users.",
  },
];

const Process = (props: Props) => {
  return (
    <div className={styles.process}>
      <Wave7 />
      <Wave6 />
      <div className="container">
        <div>
          <h2>
            Our <span>process</span>
          </h2>
          <div>
            {data.map((item, idx) => (
              <div key={idx}>
                <div className={styles.number}>{idx + 1}</div>
                <h3>{item.header}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
