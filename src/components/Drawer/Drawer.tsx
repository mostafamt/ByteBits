import React from "react";
import { IoIosClose } from "react-icons/io";

import styles from "./drawer.module.scss";

type Props = {
  show: boolean;
  toggle: () => void;
  getRoutes: (withButton: boolean) => React.JSX.Element[];
};

const Drawer = (props: Props) => {
  const { show, toggle, getRoutes } = props;

  return (
    <div
      className={styles.drawer}
      style={{
        transform: `translate(${show ? "0" : "100%"}, 0)`,
        display: show ? "block" : "none",
      }}
    >
      <button onClick={toggle}>
        <IoIosClose />
      </button>
      <div className={styles.list}>{getRoutes(true)}</div>
    </div>
  );
};

export default Drawer;
