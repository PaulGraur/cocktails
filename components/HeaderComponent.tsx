import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import Logo from "@/images/header/logo.svg";
import s from "./HeaderComponent.module.scss";
import Search from "./../images/header/search.svg";
import BurgerMenuOpen from "./../images/header/burger-menu.svg";

const HeaderComponent = () => {
  return (
    <header className={classNames(s.container, s.header)}>
      <div className={s.header__info}>
        <Link href="/app/page.tsx" target="_blank">
          <Image src={Logo} alt="logo" width="156" height="43" />
        </Link>
        <nav className={s.header__nav}>
          <ul className={s.header__nav__list}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Favourite</a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <form className={s.header__search} action="">
          <button className={s.header__search__button}>
            <Image
              className={s.header__search__svg}
              src={Search}
              alt="Search"
            />
            <div className={s.header__search__line}></div>
            <input
              className={s.header__search__input}
              type="Search |"
              autoComplete="off"
              name="searchQuery"
              placeholder="Search |"
            />
          </button>
        </form>
      </div>
      <div className={s.header__thema}>
        <p className={s.header__thema__light}>Light</p>
        <button className={s.header__thema__button}></button>
        <p className={s.header__thema__dark}>Dark</p>
      </div>
      <button className={s.menu__open} type="button">
        <Image
          className={s.menu__open__img}
          src={BurgerMenuOpen}
          alt="Burger-menu"
        />
      </button>
    </header>
  );
};
export default HeaderComponent;
