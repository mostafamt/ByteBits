import React from "react";
import Image from "next/image";
import TeamNote from "../TeamNote/TeamNote";

import styles from "./offer.module.scss";

type Props = {};

const Offer = (props: Props) => {
  return (
    <>
      <div className="container">
        <div className={styles.offer}>
          <div>
            <h2>
              What we <span>Offer</span>
            </h2>
            <p>
              At ByteBits, we provide a range of IT services designed for modern businesses. Our
              team of remote experts specializes in software development, crafting reliable and
              tailored solutions. We create intuitive web and mobile applications, ensuring
              excellent user experiences across all platforms. Our team provides support and
              maintenance to keep your systems running smoothly, minimizing downtime and maximizing
              productivity. Our commitment to customer satisfaction and personalized support drives
              everything we do. We're here to help you focus on what matters most—your business.
            </p>
          </div>
          <div>
            <Image src="/offer.svg" alt="offer" width={600} height={600} />
          </div>
        </div>
      </div>
      <TeamNote>&quot;Innovation is the engine that powers IT solutions.&quot;</TeamNote>
    </>
  );
};

export default Offer;
