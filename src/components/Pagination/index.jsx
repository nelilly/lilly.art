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
