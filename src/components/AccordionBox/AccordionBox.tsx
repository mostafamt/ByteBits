"use client";
import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styles from "./accordionBox.module.scss";

type Props = {
  children: React.ReactNode;
};

const AccordionBox = (props: Props) => {
  const [open, setOpen] = React.useState(false);

  const onClickExpand = () => {
    setOpen(prevState => !prevState);
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
