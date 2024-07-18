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
    name: "Mark Whiteman",
    title: "Software Engineer",
    image: "/developer-1.png",
  },
  {
    name: "Mark Whiteman",
    title: "Software Engineer",
    image: "/developer-1.png",
  },
  {
    name: "Mark Whiteman",
    title: "Software Engineer",
    image: "/developer-1.png",
  },
  {
    name: "Mark Whiteman",
    title: "Software Engineer",
    image: "/developer-1.png",
  },
  {
    name: "Mark Whiteman",
    title: "Software Engineer",
    image: "/developer-1.png",
  },
  {
    name: "Mark Whiteman",
    title: "Software Engineer",
    image: "/developer-1.png",
  },
  {
    name: "Mark Whiteman",
    title: "Software Engineer",
    image: "/developer-1.png",
  },
];

const Developers = (props: Props) => {
  return (
    <div className={`container ${styles.developers}`}>
      <h3>Developers</h3>
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
