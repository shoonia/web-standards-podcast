import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

import Document from '../../components/Document';

const NotFound = () => (
  <Document
    title="404"
  >
    <Helmet
      meta={[{
        name: 'robots',
        content: 'noindex',
      }]}
    />
    <div>
      <p>
        Ошибка 404: страница не найдена
      </p>
      <Link
        to="/"
      >
        Вернуться на главную страницу
      </Link>
    </div>
  </Document>
);

export default NotFound;
