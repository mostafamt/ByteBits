import React from "react";

import styles from "./developer.module.scss";
import Image from "next/image";

type Props = {};

const devlopers = [
  {
    name: "Mark Whiteman",
    title: "Software Engineer",
    image: "/developer-1.png",
  },
  {
    name: "Sarah Blackman",
    title: "Full-stack Developer",
    image: "/developer-2.png",
  },
  {
    name: "Joseph Jewman",
    title: "Cyber Security Analyst",
    image: "/developer-3.png",
  },
  {
    name: "Jose Tacoman",
    title: "Chief Taco Chef",
    image: "/developer-4.png",
  },
  {
    name: "Mark Whiteman",
    title: "Software Engineer",
    image: "/developer-1.png",
  },
  {
    name: "Sarah Blackman",
    title: "Full-stack Developer",
    image: "/developer-2.png",
  },
  {
    name: "Joseph Jewman",
    title: "Cyber Security Analyst",
    image: "/developer-3.png",
  },
  {
    name: "Jose Tacoman",
    title: "Chief Taco Chef",
    image: "/developer-4.png",
  },
];

const Developers = (props: Props) => {
  return (
    <div className={`container ${styles.developers}`}>
      <div className={styles.header}>
        <h3>Developers</h3>
        <select name="developer" id="developer">
          <option value="front-end">Front-End</option>
          <option value="front-end">Back-End</option>
          <option value="software-engineer">Software Enginner</option>
        </select>
      </div>
      <div>
        {devlopers.map(developer => (
          <div key={developer.name} className={styles["developer-card"]}>
            <Image src={developer.image} alt={developer.name} width={250} height={250} />
            <p>{developer.name}</p>
            <p>{developer.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Developers;
