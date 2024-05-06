"use client";

import Image from 'next/image';
import styles from './style.module.scss'
import logo from '@/public/img/logos/logo.svg'
import { Button } from '../_ui/button/button';
import Link from 'next/link';
import { LOGO_ALT } from '@/constants/image-alts.constants';
import clsx from 'clsx';
import { Dispatch, SetStateAction, useState } from 'react';
import routes from '@/config/routes.config.json'
import { RouteTypes } from './header.config';
import { SocialItems } from '../_ui/social-items/social-items';

export function Header() {
    const [burgerActive, setBurgerActive] = useState<boolean>(false)

    const connectWalletRoute: RouteTypes = routes.actions.connectWallet;

    return (
      <header className={styles.header}>
        <div className="container container-big">
          <div className={styles.wrapper}>
            <Logo />

            <div 
                className={clsx(
                    styles.overlay,
                    burgerActive ? styles.active : ""
                )}
            ></div>

            <Navigation 
                burgerActive={burgerActive}
            />

            <div className={styles.actions}>
              <Button link={connectWalletRoute.path}>
                {connectWalletRoute.page}
              </Button>

              <BurgerButton setBurgerActive={setBurgerActive} />
            </div>
          </div>
        </div>
      </header>
    );
}

const Logo = () => {
    const home: string = routes.home

    return (
        <Link 
            href={home}
            className={styles.logo}
        >
            <Image
                src={logo}
                width={140}
                height={39}
                alt={LOGO_ALT}
            />
        </Link>
    );
}

const Navigation = ({ burgerActive }: { burgerActive: boolean }) => {
  return (
    <nav className={clsx(styles.navigation, burgerActive && styles.active)}>
      <div className={styles.social}>
        <SocialItems />
      </div>

      <Menu />
    </nav>
  );
};

const Menu = () => {
    const menuItems = routes.siteNavigation;

    return (
        <div 
            className={styles.menu}
        >
            {menuItems.map(el => {
                if (el.path === "") {
                    return (
                        <span 
                            key={el.page}
                            className={
                                styles.menuItem
                            }
                        >
                            <span
                                className={
                                    styles.menuText
                                }
                            >
                                {el.page}
                            </span>

                            <span
                                className={styles.menuLabel}
                            >
                                soon
                            </span>
                        </span>
                    );
                } else {
                    return (
                        <Link
                            key={el.page}
                            href={el.path}
                            className={
                                clsx(
                                    styles.menuItem,
                                    styles.activeLink,
                                    styles.menuText
                                )
                            }
                        >
                            {el.page}
                        </Link>
                    );
                }
            })}
        </div>
    );
}

const BurgerButton = ({
  setBurgerActive,
}: {
  setBurgerActive: Dispatch<SetStateAction<boolean>>;
}) => {
  const [active, setActive] = useState<boolean>(false);

  const handleBurger = () => {
    setBurgerActive(!active);
    setActive(!active);

    if (!active) {
        scrollTo(0, 0)
        document.body.style.overflow = "hidden"
        document.documentElement.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
    }
  };

  return (
    <button
      className={clsx(styles.burger, active && styles.active)}
      onClick={() => handleBurger()}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};
