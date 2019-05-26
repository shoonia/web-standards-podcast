import React, { memo } from 'react';
import { Link } from 'gatsby';

import Banner from './Banner';
import urls from '../../urls';

const Header = () => (
  <header>
    <div>
      <Link
        to="/"
      >
        <Banner />
      </Link>
    </div>
    <nav
      aria-label="навигация по сайту"
    >
      <ul>
        <li>
          <Link
            to="/"
          >
            Главная
          </Link>
        </li>
        <li>
          <Link
            to={urls.buildPodcast(1)}
          >
            Подкасты
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default memo(Header);
