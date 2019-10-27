import React, { memo } from 'react';

import Banner from '../Banner';
import css from './Header.module.css';

function Header() {
  return (
    <header className={css.header}>
      <div className={css.wrapper}>
        <Banner />
      </div>
    </header>
  );
}

export default memo(Header);
