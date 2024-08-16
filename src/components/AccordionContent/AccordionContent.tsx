"use client";
import React, { Dispatch, SetStateAction } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";

import type { SerializedStyles } from "@emotion/serialize";
import type { DOMAttributes } from "react";

import styles from "./accordionContent.module.scss";

type Props = {
  service: {
    header: React.ReactNode;
    text: React.ReactNode;
    image: string;
  };
  open: boolean;
  toggle: () => void;
};

declare module "react" {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: SerializedStyles | undefined;
  }
}

const AccordionContent = (props: Props) => {
  const { service, open } = props;

  const style = `
            & > span {
              color: ${open ? "#011627 !important" : "#2ec4b6"};
            }
          `;


  return (
    <div className={styles["accordion-content"]}>
      <div>
        <h3
          css={css`
            ${style}
          `}
        >
          {service.header}
        </h3>
        <p className={styles.paragraph}>{open ? service.text : service.text?.slice(0, 300) + "..."}</p>
      </div>
      <div>
        <Image src={service.image} alt={service.image} width={250} height={250} />
      </div>
    </div>
  );
};

export default AccordionContent;
