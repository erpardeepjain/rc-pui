/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import './index.css';

const Pagination = ({ paginationConfig }) => {
    const {pageCount, itemCount, currentPage, onPageChange, showLabel = true, showStartEndPage = true } = paginationConfig;

    const [_currentPage, setCurrentPage] = useState(currentPage || 1);

    const _onPageChange = (page) => {
        setCurrentPage(page);
        onPageChange(page);
    }

    const nextPage = () => {
        const updatedPage = _currentPage + 1 <= pageCount ? _currentPage + 1 : _currentPage;
        setCurrentPage(updatedPage);
        onPageChange(updatedPage);
    }

    const prevPage = () => {
        const updatedPage = _currentPage - 1 >= 1 ? _currentPage - 1 : 1;
        setCurrentPage(updatedPage);
        onPageChange(updatedPage);
    }

    return (
        <div>
            { pageCount > 1 &&
                <div className="pagination">
                    {showLabel && <span className="align-self-center mx-4">
                        Total Entries <strong>{itemCount}</strong>
                    </span>
                    }

                    {showStartEndPage && 
                        <span 
                            className={_currentPage === 1 ? "page active disabled" : "page active"}
                            onKeyDown={() => _onPageChange(1)} 
                            onClick={() => _onPageChange(1)} 
                            role="button" 
                        >
                            <i className="arrow left" />
                            <i className="arrow left" />
                        </span>
                    }
                    <span 
                        className={_currentPage === 1 ? "page active disabled" : "page active"}
                        onKeyDown={() => prevPage()} 
                        onClick={() => prevPage()} 
                        span="button" 
                    >
                        Prev
                    </span>

                    {Array.from(Array(pageCount), (ele, i) => {
                        const start = (_currentPage+4) <= pageCount ? _currentPage : (pageCount-4);
                        const end = (_currentPage+4) <= pageCount ? (_currentPage+4) : pageCount;
                        let dom = "";
                        if(i+1 >= start && i+1 <= end) {
                            dom = <span
                            tabIndex={i}
                            role="button"
                            className={i+1 === _currentPage ? 'active page' : 'page'}
                            onClick={() => _onPageChange(i+1)}
                            onKeyDown={() => _onPageChange(i+1)}
                            >
                                {i+1}
                            </span>
                        }
                        return dom;
                    })}

                    <span 
                        className={_currentPage === pageCount ? "page active disabled" : "page active"} 
                        onKeyDown={() => nextPage()}
                        onClick={() => nextPage()}
                        role="button" 
                    >
                        Next
                    </span>
                    {showStartEndPage && 
                        <span
                            className={_currentPage === pageCount ? "page active disabled" : "page active"} 
                            onKeyDown={() => _onPageChange(pageCount)} 
                            onClick={() => _onPageChange(pageCount)}
                            role="button" 
                        >
                            <i className="arrow right" />
                            <i className="arrow right" />
                        </span>
                    }
                </div>
            }
        </div>
    )
};

export default Pagination;
