import React, { memo } from 'react';
import { Link } from 'gatsby';

import Banner from './Banner';

const Header = () => (
  <header>
    <div>
      <Link
        to="/"
      >
        <Banner />
      </Link>
    </div>
    <nav>
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
            to="/podcast/1"
          >
            Подкасты
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default memo(Header);
