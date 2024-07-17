import React from "react";
import Image from "next/image";
import { routes } from "@/routes";
import { IoMenu } from "react-icons/io5";
import { usePathname } from "next/navigation";

import styles from "./navbar.module.scss";
import Link from "next/link";

type Props = {
  theme: string | "";
};

const Navbar = (props: Props) => {
  const pathname = usePathname();
  const { theme } = props;

  const [show, setShow] = React.useState(false);

  const getRoutes = () => {
    return routes.map(route => (
      <li key={route.href}>
        <a href={route.href} className={pathname === route.href ? styles.active : ""}>
          {route.label}
        </a>
      </li>
    ));
  };

  return (
    <>
      <nav className={styles.nav}>
        <div>
          <Link href="/">
            <Image
              src={theme === "light" ? "/dark-logo.svg" : "/light-logo.svg"}
              alt="logo"
              width={250}
              height={64}
            />
          </Link>
          <ul className={styles["main-menu"]}>{getRoutes()}</ul>
          <button className={`${styles.button} ${styles[`${theme}`]}`}>Become a client</button>
          <button className={styles.hamburger} onClick={() => setShow(prevState => !prevState)}>
            <IoMenu />
          </button>
        </div>
        {show && <ul className={styles.menu}>{getRoutes()}</ul>}
      </nav>
    </>
  );
};

export default Navbar;
