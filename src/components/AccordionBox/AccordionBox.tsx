"use client";
import React, { Dispatch, SetStateAction } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styles from "./accordionBox.module.scss";

type Props = {
  children: React.ReactNode;
  open: boolean;
  toggle: () => void;
};

const AccordionBox = (props: Props) => {
  const { open, toggle } = props;

  const onClickExpand = () => {
    toggle();
  };

  return (
    <div className={`${styles["accordion-box"]} ${open && styles["open"]}`}>
      <button onClick={onClickExpand}>
        <IoIosArrowDown />
      </button>
      <div>{props.children}</div>
    </div>
  );
};

export default AccordionBox;
