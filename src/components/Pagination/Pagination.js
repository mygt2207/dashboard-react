import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';


const Pagination = () => {
	const [currentPage, setCurrentPage] = useState(1);

	const handlePageChange = (pageIndex) => {
		setCurrentPage(pageIndex);
	};
	return (
	<ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
	  previousLabel="<"
      onPageChange={(e) => handlePageChange(e.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={4}
      forcePage={currentPage - 1}
    />
	
  );
};

export default Pagination;