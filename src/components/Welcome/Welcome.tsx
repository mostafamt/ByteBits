import React from "react";
import { routes } from "@/routes";
import { usePathname } from "@/navigation";
import { useTranslations } from "next-intl";

import styles from "./welcome.module.scss";

type Props = {
  style: object;
};

const Welcome = (props: Props) => {
  const pathname = usePathname();
  const t = useTranslations();

  const getRoute = () => {
    const item = routes.find(route => route.href === pathname);
    return item || { header: "", paragraph: "", theme: "dark" };
  };

  return (
    <section className={styles.welcome} style={props.style}>
      <div>
        <h1 className={styles[`${getRoute().theme}`]}>{t(getRoute()?.header)}</h1>
        <p className={styles[`${getRoute().theme}`]}>{t(getRoute()?.paragraph)}</p>
      </div>
    </section>
  );
};

export default Welcome;
