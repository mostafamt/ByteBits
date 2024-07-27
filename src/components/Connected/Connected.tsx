import React from "react";
import Image from "next/image";
import Wave8 from "@/components/svgs/Wave8/Wave8";

import styles from "./connected.module.scss";

type Props = {};

const Connected = (props: Props) => {
  return (
    <div className={styles.connected}>
      <Wave8 />
      <div className="container">
        <h2>
          Internationally <span>Connected</span>
        </h2>
        <div>
          <Image src="/connected.svg" alt="connected" width={600} height={600} />
          <div>
            <h3>Title</h3>
            <p>
              Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen
              book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an
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
