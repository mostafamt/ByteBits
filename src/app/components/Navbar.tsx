"use client";
import { useEffect, useState } from "react";
import styles from "../../styles/navbar.module.scss";
import navItems from "./nav-items.json";
import Link from "next/link";

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsNavVisible(scrollTop <= 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${isNavVisible ? "" : styles.hidden}`}>
      <ul>
        <img src="/logo.svg" alt="logo" />
        {navItems.map((item) => {
          return (
            <li key={item.name}>
              <a href={item.link}>{item.name}</a>
            </li>
          );
        })}
        <li>
          <button>
            <Link href="/Contact">Become a client</Link>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
