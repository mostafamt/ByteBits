import React from "react";
import Image from "next/image";
import { routes } from "@/routes";
import { IoMenu } from "react-icons/io5";
import { usePathname } from "next/navigation";

import styles from "./navbar.module.scss";
import Link from "next/link";
import Drawer from "@/components/Drawer/Drawer";

type Props = {
  theme: string | "";
};

const Navbar = (props: Props) => {
  const pathname = usePathname();
  const { theme } = props;

  const [show, setShow] = React.useState(false);

  const getRoutes = (withButton = false) => {
    let newRoutes = [];

    newRoutes = routes.map(route => (
      <li key={route.href}>
        <a href={route.href} className={pathname === route.href ? styles.active : ""}>
          {route.label}
        </a>
      </li>
    ));

    if (withButton) {
      newRoutes = [
        ...newRoutes,
        <li key="become-a-client">
          <button>Become a client</button>
        </li>,
      ];
    }

    return newRoutes;
  };

  const onClickDrawer = () => {
    setShow(prevState => !prevState);
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
          <button className={styles.hamburger} onClick={onClickDrawer}>
            <IoMenu />
          </button>
        </div>

        <Drawer show={show} toggle={onClickDrawer} getRoutes={getRoutes} />
      </nav>
    </>
  );
};

export default Navbar;
