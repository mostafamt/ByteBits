import React from "react";
import { usePathname } from "next/navigation";

import styles from "./welcome.module.scss";
import { routes } from "@/routes";

type Props = {
  style: object;
};

const Welcome = (props: Props) => {
  const pathname = usePathname();

  const getRoute = () => {
    const item = routes.find(route => route.href === pathname);
    return item || { header: "", paragraph: "", theme: "dark" };
  };

  return (
    <section className={styles.welcome} style={props.style}>
      <div>
        <h1 className={styles[`${getRoute().theme}`]}>{getRoute().header}</h1>
        <p className={styles[`${getRoute().theme}`]}>{getRoute()?.paragraph}</p>
      </div>
    </section>
  );
};

export default Welcome;
