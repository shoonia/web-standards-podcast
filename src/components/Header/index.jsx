import React, { memo } from 'react';
import { Link } from 'gatsby';

import Banner from '../Banner';
import urls from '../../urls';
import css from './Header.module.css';

const Header = () => (
  <header className={css.header}>
    <div className={css.wrapper}>
      <Banner />
      <nav
        aria-label="навигация по сайту"
        className={css.menu}
      >
        <ul className={css.menuList}>
          <li>
            <Link
              to="/"
              className={css.menuLink}
            >
              Главная
            </Link>
          </li>
          <li>
            <Link
              to={urls.buildPodcast(1)}
              className={css.menuLink}
            >
              Подкасты
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default memo(Header);
