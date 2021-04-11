import React, { memo } from 'react';

import * as s from './Header.module.css';
import Banner from '../Banner';

const Header = () => (
  <header className={s.header}>
    <div className={s.wrapper}>
      <Banner />
    </div>
  </header>
);

export default memo(Header);
