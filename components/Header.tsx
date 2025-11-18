'use client';

import { useState } from "react";
import Link from "next/link";
import css from "../app/css/Header.module.css";
import Modal from "./MobileMain";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className={css.header}>
        <div className={css.logo}>
          <Link href="/">
            <svg width={23} height={23} aria-hidden="true">
              <use href="/icon.svg#icon-plant" />
            </svg>
          </Link>
          <span className={css.title}>Подорожники</span>
        </div>

    
        <nav className={css.desktopNav} aria-label="Main Navigation">
          <ul className={css.navigation}>
            <li><Link href="/" className={css.navLink}>Головна</Link></li>
            <li><a href="#stories" className={css.navLink}>Історії</a></li>
            <li><a href="#travelers" className={css.navLink}>Мандрівники</a></li>
            <li><Link href="/sign-up" className={css.signInBtn}>Вхід</Link></li>
            <li><Link href="/sign-in" className={css.signUpBtn}>Реєстрація</Link></li>
          </ul>
        </nav>

       
        <button
          type="button"
          className={css.burger}
          aria-label="Open menu"
          onClick={openMenu}
        >
          <svg width={24} height={24} aria-hidden="true" fill="#FFFFFF">
            <use href="/icon.svg#icon-menu" />
          </svg>
        </button>
      </header>

      {isMenuOpen && (
        <Modal onClose={closeMenu}>
          <div className={css.mobilelogo}>
          <Link href="/">
            <svg width={23} height={23} aria-hidden="true">
              <use href="/icon.svg#icon-plant" />
            </svg>
          </Link>
          <span className={css.mobileTitle}>Подорожники</span>
        </div>
          <ul className={css.mobileNavigation}>
            <li ><Link href="/" onClick={closeMenu} className={css.mobileItem}>Головна</Link></li>
            <li ><a href="#stories" onClick={closeMenu} className={css.mobileItem}>Історії</a></li>
            <li ><a href="#travelers" onClick={closeMenu} className={css.mobileItem}>Мандрівники</a></li>
            <li ><Link href="/sign-up" onClick={closeMenu} className={css.mobilesignInBtn}>Вхід</Link></li>
            <li ><Link href="/sign-in" onClick={closeMenu} className={css.mobilesignUpBtn}>Реєстрація</Link></li>
          </ul>
        </Modal>
      )}
    </>
  );
};

export default Header;