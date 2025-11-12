import css from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className={css.header}>
      <div>
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Подорожники"
            width={120}
            height={40}
          />
          <span className={css.title}>Подорожники</span>
        </Link>
      </div>

      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li><Link href="/" className={css.navLink}>Головна</Link></li>
          <li><a href="#stories" className={css.navLink}>Історії</a></li>
          <li><a href="#travelers" className={css.navLink}>Мандрівники</a></li>
          <li><Link href="/sign-up" className={`${css.navLink} ${css.signUpBtn}`}>Реєстрація</Link></li>
          <li><Link href="/sign-in" className={`${css.navLink} ${css.signInBtn}`}>Вхід</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;