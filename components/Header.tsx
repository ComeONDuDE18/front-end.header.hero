import css from '../app/css/Header.module.css';
import Link from 'next/link';


const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.logo}>
        <Link href="/">
          <svg width="23" height="23" aria-hidden="true">
            <use href="/icon.svg#icon-plant" />
          </svg>
        </Link>
        <span className={css.title}>Подорожники</span>
      </div>

      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li><Link href="/" className={css.navLink}>Головна</Link></li>
          <li><a href="#stories" className={css.navLink}>Історії</a></li>
          <li><a href="#travelers" className={css.navLink}>Мандрівники</a></li>
          <li><Link href="/sign-up" className={css.signInBtn}>Вхід</Link></li>
          <li><Link href="/sign-in" className={css.signUpBtn}>Реєстрація</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;