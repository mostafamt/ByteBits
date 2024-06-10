import React from "react";

import styles from "./projects.module.scss";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const data = [
  {
    image: "/project-1.png",
  },
  {
    image: "/project-2.png",
  },
  {
    image: "/project-3.png",
  },
  {
    image: "/project-4.png",
  },
  {
    image: "/project-5.png",
  },
  {
    image: "/project-6.png",
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
