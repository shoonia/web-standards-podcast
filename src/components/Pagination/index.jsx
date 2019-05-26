import React from 'react';
import { navigate } from 'gatsby';
import ReactPaginate from 'react-paginate';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import urls from '../../urls';
import css from './Pagination.module.css';

class Pagination extends React.PureComponent {
  static defaultProps = {
    previous: null,
    next: null,
  };

  static propTypes = {
    previous: PropTypes.number,
    next: PropTypes.number,
    totalPages: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
  };

  ariaLabelBuilder = (pageNumber, isActive) => (
    isActive
      ? `cтраница ${pageNumber} текущая страница`
      : `cтраница ${pageNumber}`
  );

  onPageChangeHandler = ({ selected }) => {
    navigate(urls.buildPodcast(selected + 1));
  }

  render() {
    const {
      next,
      previous,
      totalPages,
      current,
    } = this.props;

    const hasNext = next !== null;
    const hasPrev = previous !== null;
    const initialPage = (current < 1) ? 0 : (current - 1);

    return (
      <>
        <Helmet>
          {hasPrev && (
            <link
              rel="prev"
              href={urls.buildPodcast(previous)}
            />
          )}
          {hasNext && (
            <link
              rel="next"
              href={urls.buildPodcast(next)}
            />
          )}
        </Helmet>
        <nav>
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

export default Pagination;
