"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import styles from "./styles/navbar.module.scss";

import navItems from "./nav-items.json";

export default function Navbar() {
  const [isNavVisible, setIsNavVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
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
        <Image src="/logo.svg" width={100} height={100} alt="logo" />
        {navItems.map(item => {
          return (
            <li key={item.id}>
              <Link href={item.link}>{item.name}</Link>
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
}
