import PropTypes from 'prop-types';

import {
  pagination,
  page,
  itemCount,
  paginationButtons,
  pagesCount,
  selected,
} from './style.module.css';

const paginate = (currentPage, endPage, onPageSelect) => {
  let n = 0;
  const pages = [];

  while (n < endPage) {
    if (((endPage <= 7 ))
    || (n === 0)
    || (currentPage <= 3 && (n <= 4))
    || (n === currentPage - 1 || n === currentPage || n === currentPage + 1)
    || (currentPage >= endPage - 4 && (n >= endPage - 5))
    || (n >= endPage - 1)){
      pages.push(<button type="button" onClick={(e) => onPageSelect(e)} value={n} key={`button_${n}`} className={`${page} ${currentPage === n ? selected : null}`}>{n + 1}</button>);
    }

    if (
      (endPage > 7 ) && 
      ((currentPage >= 4 && n === 0)
      || (n === endPage - 2 && (currentPage <= 3 || endPage - 5 >= currentPage)))
    ){
      pages.push(<span className={page} key={`span_${n}`}>&hellip;</span>);
    }
    n += 1;
  }
  // ←  01  →
  // ←  01 02  →
  // ←  01 02 03 04 05 06 07  →
  // ←  01 02 03 04 05 …… 08  →
  // ←  01 …… 04 05 06 07 08  →
  // ←  01 …… 05 06 07 08 09  →

    // while (n < endPage) {
  //   if (((currentPage >= 4)
  //   && n === 1)
  //   || ((n > 4 && currentPage <= endPage - 5)
  //   && ((n + 1) % 5 === 0))
  //   || ((n >= currentPage + 2) && (n <= currentPage - 2))) {
  //     pages.push(<span className={page} key={`span_${n}`}>&hellip;</span>);
  //   }
  //   if ((n === 0)
  //   || (n < 5 && currentPage < 3)
  //   || ((n <= currentPage + 2) && (n >= currentPage - 2))
  //   || ((n + 1) % 5 === 0)
  //   || (n > 4 && currentPage >= endPage - 4)) {
  //     pages.push(<button type="button" onClick={(e) => onPageSelect(e)} value={n} key={`button_${n}`} className={`${page} ${currentPage === n ? selected : null}`}>{n + 1}</button>);
  //   }
  //   n += 1;
  // }

  // pages.push(<button type="button" onClick={(e) => onPageSelect(e)} value="0" key={`button_0`} className={`${page} ${currentPage === 0 ? selected : null}`}>{n + 1}</button>)
  // pages.push(<button type="button" onClick={(e) => onPageSelect(e)} value="1" key={`button_1`} className={`${page} ${currentPage === 1 ? selected : null}`}>{n + 2}</button>)
  // pages.push(<button type="button" onClick={(e) => onPageSelect(e)} value="2" key={`button_2`} className={`${page} ${currentPage === 2 ? selected : null}`}>{n + 3}</button>)
  // pages.push(<button type="button" onClick={(e) => onPageSelect(e)} value={endPage - 1} key={`button_${endPage}`} className={`${page} ${currentPage === endPage ? selected : null}`}>{endPage}</button>)
  
  return pages;
};

const Pagination = ({
  itemType,
  count,
  currentPage,
  onPageSelect,
}) => (
  <div className={pagination}>
    <p className={itemCount}>{count} {count === 1 ? itemType[0] : itemType[1]}</p>
    {count > 1 && (
      <p className={paginationButtons}>
        {/* {currentPage > 0 && <span>&larr;</span>} */}
        {paginate(parseInt(currentPage, 10), Math.ceil(count / 10), onPageSelect)}
        {/* {currentPage + 1 !== (Math.ceil(count / 10)) && <span>&rarr;</span>} */}
      </p>
    )}
    <p className={pagesCount}>page {parseInt(currentPage, 10) + 1} of {Math.ceil(count / 10)}</p>
  </div>
);

export default Pagination;

Pagination.propTypes = {
  itemType: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  count: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageSelect: PropTypes.func.isRequired,
};
