import React from 'react';

import css from './Footer.module.css';

const Footer = () => (
  <footer
    className={css.footer}
    role="contentinfo"
  >
    <div className={css.container}>
      <section>
        <h3>
          Слушайте
        </h3>
        <ul>
          <li>
            <a href="https://itunes.apple.com/podcast/id1080500016">iTunes</a>
          </li>
          <li>
            <a href="https://vk.com/podcasts-32017543">ВКонтакте</a>
          </li>
          <li>
            <a href="https://music.yandex.ru/album/6245956">Яндекс.Музыка</a>
          </li>
          <li>
            <a href="https://open.spotify.com/show/3rzAcADjpBpXt73L0epTjV">Spotify</a>
          </li>
          <li>
            <a href="https://www.youtube.com/playlist?list=PLMBnwIwFEFHcwuevhsNXkFTcadeX5R1Go">Ютуб</a>
          </li>
          <li>
            <a href="https://soundcloud.com/web-standards">SoundCloud</a>
          </li>
          <li>
            <a href="https://web-standards.ru/podcast/feed/">RSS</a>
          </li>
        </ul>
      </section>
      <section>
        <h3>
          Читайте
        </h3>
        <ul>
          <li>
            <a href="https://twitter.com/webstandards_ru">Твиттер</a>
          </li>
          <li>
            <a href="https://vk.com/webstandards_ru">ВКонтакте</a>
          </li>
          <li>
            <a href="https://www.facebook.com/webstandardsru">Фейсбук</a>
          </li>
          <li>
            <a href="https://t.me/webstandards_ru">Телеграм</a>
          </li>
        </ul>
      </section>
      <section>
        <h3>
          Поддержите
        </h3>
        <ul>
          <li>
            <a href="https://www.patreon.com/webstandards_ru">Патреон</a>
          </li>
          <li>
            <a href="https://money.yandex.ru/to/41001119329753">Яндекс.Деньги</a>
          </li>
          <li>
            <a href="https://www.paypal.me/pepelsbey">PayPal</a>
          </li>
        </ul>
      </section>
    </div>
    <div className={css.container}>
      <abbr
        title="Лицензии Creative Commons"
      >
        СС BY-NC-ND 4.0
      </abbr>
    </div>
  </footer>
);

export default Footer;
