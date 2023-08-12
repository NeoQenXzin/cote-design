import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import logoDark from '../../../public/assets/logos/logoLight.png';
import style from './Navbar.module.css';
// Librairie Traduction 
import { useTranslation } from "react-i18next"


export default function Navbar(props) {
    // Destructurer
    const { t, i18n } = useTranslation('en');
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <>
            <Head>
                <title>Coté Design</title>
                <meta name="description design" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                {/* <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
                    crossOrigin="anonymous"
                /> */}
            </Head>
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
                            <Link href={"/services"} className={style.navLink}>
                                {t("menu.services")}
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
        </>
    )
}
