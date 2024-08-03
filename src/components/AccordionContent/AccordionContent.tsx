"use client";
import React, { Dispatch, SetStateAction } from "react";

import styles from "./accordionContent.module.scss";
import Image from "next/image";

type Props = {
  service: {
    header: React.ReactNode;
    text: React.ReactNode;
    image: string;
  };
  open: boolean;
  toggle: () => void;
};

// style={{ color: open ? "#011627" : "#fff" }}
const AccordionContent = (props: Props) => {
  const { service, open } = props;

  const css = `
    color: ${open} ? "#011627" : "#fff"
    span {
        color: #f00;
    }`;

  return (
    <div className={styles["accordion-content"]}>
      <div>
        <h3>
          <style>{css}</style>
          {service.header}
        </h3>
        {service.text}
      </div>
      <div>
        <Image src={service.image} alt={service.image} width={250} height={250} />
      </div>
    </div>
  );
};

export default AccordionContent;
