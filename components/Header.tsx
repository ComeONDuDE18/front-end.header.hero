import css from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';


const Header = () => {
    return (
<header className={css.header}>
      <Link href="/" aria-label="Home" className={css.logoLink}>
        <Image
          src="/img/svg/logo.svg"   
          height={40}
          alt="Подорожники"
        />
        <span className={css.logoText}>Подорожники</span>
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <Link href="/">Головна</Link>
          <a href="#stories">Історії</a>
          <a href="#travelers">Мандрівники</a>

        </ul>
      </nav>
    </header>
  );
};

export default Header;