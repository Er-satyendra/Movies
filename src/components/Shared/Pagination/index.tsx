import React, { useState } from 'react';
import './Pagination.scss';

const Pagination: React.FC<PaginationProps> = ({
    totalPages,
    currentPage,
    onPageChange,
    itemsPerPage
}) => {

    const [pageNumber, setPageNumber] = useState(currentPage);

    const handlePrevious = () => {
        if (pageNumber > 1) {
            onPageChange(pageNumber - 1);
            setPageNumber(pageNumber - 1);
        }
    };

    const handleNext = () => {
        if (pageNumber < totalPages) {
            onPageChange(pageNumber + 1);
            setPageNumber(pageNumber + 1);
        }
    };

    const handlePageChange = (page: number) => {
        onPageChange(page);
        setPageNumber(page);
    };

    const getPages = () => {
        if(totalPages<4){
            return Array.apply(null, Array(totalPages))
            .map(function (y, i) { return i+1; });
        }
        let current = currentPage
        let prev = current - 1
        let next = current + 1

        if (prev < 1) {
            current = 2
            prev = 1
            next = 3
        }
        if (next > totalPages) {
            prev = totalPages - 2
            current = totalPages - 1
            next = totalPages
        }

        return [prev, current, next]
    }
    

    return (
        <div className='d-flex align-items-center justify-content-center'>
            <nav aria-label="Page navigation example">
            <ul className="pagination">
                {(totalPages > 3 && currentPage !== totalPages) && <li className="page-item">
                    <a
                        className={`page-global`}
                        href="javascript:"
                        onClick={handlePrevious}
                        aria-label="Previous"
                    >
                        Previous
                    </a>
                </li>}
                {getPages().map((page) => (
                    <li key={page} className="page-item">
                        <a
                            className={`page-link ${page === pageNumber ? 'active' : ''}`}
                            href="javascript:"
                            onClick={() => handlePageChange(page)}
                        >
                            {page}
                        </a>
                    </li>
                ))}
                {(totalPages > 3 && currentPage !== 1) && <li className="page-item">
                    <a
                        className="page-global"
                        href="javascript:"
                        onClick={handleNext}
                        aria-label="Next"
                    >
                        Next
                    </a>
                </li>}
                
            </ul>
        </nav>
        </div>
        
    );
};

export default Pagination;