import React from "react";
import Image from "next/image";
import { routes } from "@/routes";
import { IoMenu } from "react-icons/io5";
import { usePathname } from "next/navigation";

import styles from "./navbar.module.scss";

type Props = {
  theme: string | "";
};

const Navbar = (props: Props) => {
  const pathname = usePathname();
  const { theme } = props;

  const [show, setShow] = React.useState(false);

  return (
    <>
      <nav className={styles.nav}>
        <div>
          <Image
            src={theme === "light" ? "/dark-logo.svg" : "/light-logo.svg"}
            alt="logo"
            width={250}
            height={64}
          />
          <ul className={styles['main-menu']}>
            {routes.map(route => (
              <li key={route.href}>
                <a href={route.href} className={pathname === route.href ? styles.active : ""}>
                  {route.label}
                </a>
              </li>
            ))}
          </ul>
          <button className={`${styles.button} ${styles[`${theme}`]}`}>Become a client</button>
          <button className={styles.hamburger} onClick={() => setShow(prevState => !prevState)}>
            <IoMenu />
          </button>
        </div>
        {show && (
          <div className={styles.menu}>
            {routes.map(route => (
              <li key={route.href}>
                <a href={route.href} className={pathname === route.href ? styles.active : ""}>
                  {route.label}
                </a>
              </li>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
