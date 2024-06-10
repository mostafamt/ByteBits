import React from "react";

import styles from "./ourTeam.module.scss";
import Card from "../Card/Card";
import Image from "next/image";
import Note from "../Note/Note";

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

const OurTeam = (props: Props) => {
  return (
    <div className={styles["our-team"]}>
      <div className="container">
        <div>
          <h2>
            <span>Meet</span> Our <span>team</span>{" "}
          </h2>
        </div>
        <h3>Leadership</h3>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <div className={styles.developers}>
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
      </div>
      <Note>Feel like you may fit in? Introduce yourself to us!</Note>
    </div>
  );
};

export default OurTeam;
