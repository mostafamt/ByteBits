import React from "react";

import styles from "./projects.module.scss";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const data = [
  {
    image: "/projects/6.jpg",
  },
  {
    image: "/projects/2.webp",
  },
  {
    image: "/projects/1.jpg",
  },
  {
    image: "/projects/4.jpg",
  },
  {
    image: "/projects/3.webp",
  },
  {
    image: "/projects/5.jpg",
  },
];

const Projects = (props: Props) => {
  return (
    <div className="container">
      <ul className={styles.projects}>
        {
          data.map(item => (
            <li key={item.image}>
              <Link href="#">
                <Image src={item.image} alt={item.image} width={250} height={250} />
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Projects;
