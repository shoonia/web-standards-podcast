import React from 'react';
import { navigate } from 'gatsby';
import ReactPaginate from 'react-paginate';
import { Helmet } from 'react-helmet';
import T from 'prop-types';

import urls from '../../urls';
import css from './Pagination.module.css';

class Pagination extends React.PureComponent {
  ariaLabelBuilder = (pageNumber, isActive) => (
    `cтраница ${pageNumber}${isActive ? ', текущая страница' : ''}`
  );

  onPageChangeHandler = ({ selected }) => {
    navigate(urls.buildPodcast(selected + 1));
  }

  render() {
    const {
      nextUrl,
      prevUrl,
      totalPages,
      current,
    } = this.props;

    const initialPage = (current < 1) ? 0 : (current - 1);

    return (
      <>
        <Helmet>
          {prevUrl !== null && (
            <link
              rel="prev"
              href={prevUrl}
            />
          )}
          {nextUrl !== null && (
            <link
              rel="next"
              href={nextUrl}
            />
          )}
        </Helmet>
        <nav
          aria-label="постраничная навигация"
          role="navigation"
        >
          <ReactPaginate
            pageCount={totalPages}
            // forcePage={initialPage}
            initialPage={initialPage}

            onPageChange={this.onPageChangeHandler}
            hrefBuilder={urls.buildPodcast}
            ariaLabelBuilder={this.ariaLabelBuilder}

            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
            disableInitialCallback

            containerClassName={css.list}
            pageLinkClassName={css.link}

            pageClassName={css.item}
            activeClassName={css.active}
            disabledClassName={css.disabled}

            previousClassName={css.prev}
            previousLinkClassName={css.link}
            previousLabel="Позже"

            nextClassName={css.next}
            nextLinkClassName={css.link}
            nextLabel="Раньше"

            breakClassName={css.break}
            breakLabel="..."
          />
        </nav>
      </>
    );
  }
}

Pagination.defaultProps = {
  prevUrl: null,
  nextUrl: null,
};

Pagination.propTypes = {
  prevUrl: T.string,
  nextUrl: T.string,
  totalPages: T.number.isRequired,
  current: T.number.isRequired,
};

export default Pagination;
