import React from "react";

import styles from "./connected.module.scss";
import Image from "next/image";

type Props = {};

const Connected = (props: Props) => {
  return (
    <div className={styles.connected}>
      <Image src="/line-2.svg" alt="line-2" width={250} height={250} />
      <div className="container">
        <h2>
          Internationally <span>Connected</span>
        </h2>
        <div>
          <Image src="/connected.svg" alt="connected" width={600} height={600} />
          <div>
            <h3>Title</h3>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen
              book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen
              book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connected;
