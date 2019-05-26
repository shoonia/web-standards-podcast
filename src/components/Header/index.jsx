import React from 'react';
import { Link } from 'gatsby';

const Header = () => (
  <header>
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

export default Header;
