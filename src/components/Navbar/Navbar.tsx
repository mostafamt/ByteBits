import React from "react";
import Image from "next/image";
import { routes } from "@/routes";

import styles from "./navbar.module.scss";
import { usePathname } from "next/navigation";

type Props = {
  theme: string | "";
};

const Navbar = (props: Props) => {
  const pathname = usePathname();
  const { theme } = props;

  return (
    <nav className={styles.nav}>
      <Image
        src={theme === "light" ? "/dark-logo.svg" : "/light-logo.svg"}
        alt="logo"
        width={250}
        height={64}
      />
      <ul>
        {routes.map(route => (
          <li key={route.href}>
            <a href={route.href} className={pathname === route.href ? styles.active : ""}>
              {route.label}
            </a>
          </li>
        ))}
      </ul>
      <button className={styles[`${theme}`]}>Become a client</button>
    </nav>
  );
};

export default Navbar;
