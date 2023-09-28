import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logoDark from "../../../public/assets/logos/logoDark.png";
import style from "./NavbarProjects.module.css";
import { useTranslation } from "react-i18next";

export default function Navbar(props) {
  const { t, i18n } = useTranslation("en");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className={style.navbar}>
      <div className={style.navContainer}>
        <Link className={style.logo} href={"/"}>
          <Image src={logoDark} width="150" height="60" alt="Logo" />
        </Link>
        <button
          className={`${style.menuIcon} ${isNavOpen ? style.open : ""}`}
          onClick={toggleNav}
        >
          <span className={style.iconBar}></span>
          <span className={style.iconBar}></span>
          <span className={style.iconBar}></span>
        </button>
        <ul className={`${style.navLinks} ${isNavOpen ? style.open : ""}`}>
          <li className={style.navItem}>
            <Link href={"/accueil"} className={style.navLink}>
              {t("menu.accueil")}
            </Link>
          </li>
          <li className={style.navItem}>
            <Link href={"/agence"} className={style.navLink}>
              {t("menu.agence")}
            </Link>
          </li>
          <li className={style.navItem}>
            <Link href={"/projects"} className={style.navLink}>
              {t("menu.projects")}
            </Link>
          </li>
          <li className={style.navItem}>
            <Link href={"/contact"} className={style.navLink}>
              {t("menu.contact")}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
