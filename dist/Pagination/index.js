/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import './index.css';
const Pagination = ({
  paginationConfig
}) => {
  const {
    pageCount,
    itemCount,
    currentPage,
    onPageChange,
    showLabel = true,
    showStartEndPage = true
  } = paginationConfig;
  const [_currentPage, setCurrentPage] = useState(currentPage || 1);
  const _onPageChange = page => {
    setCurrentPage(page);
    onPageChange(page);
  };
  const nextPage = () => {
    const updatedPage = _currentPage + 1 <= pageCount ? _currentPage + 1 : _currentPage;
    setCurrentPage(updatedPage);
    onPageChange(updatedPage);
  };
  const prevPage = () => {
    const updatedPage = _currentPage - 1 >= 1 ? _currentPage - 1 : 1;
    setCurrentPage(updatedPage);
    onPageChange(updatedPage);
  };
  return /*#__PURE__*/React.createElement("div", null, pageCount > 1 && /*#__PURE__*/React.createElement("div", {
    className: "pagination"
  }, showLabel && /*#__PURE__*/React.createElement("span", {
    className: "align-self-center mx-4"
  }, "Total Entries ", /*#__PURE__*/React.createElement("strong", null, itemCount)), showStartEndPage && /*#__PURE__*/React.createElement("button", {
    disabled: _currentPage === 1,
    type: "button",
    onKeyDown: () => _onPageChange(1),
    onClick: () => _onPageChange(1),
    className: "page active"
  }, /*#__PURE__*/React.createElement("i", {
    className: "arrow left"
  }), /*#__PURE__*/React.createElement("i", {
    className: "arrow left"
  })), /*#__PURE__*/React.createElement("button", {
    disabled: _currentPage === 1,
    type: "button",
    onKeyDown: () => prevPage(),
    onClick: () => prevPage(),
    className: "page active"
  }, "Prev"), Array.from(Array(pageCount), (ele, i) => {
    const start = _currentPage + 4 <= pageCount ? _currentPage : pageCount - 4;
    const end = _currentPage + 4 <= pageCount ? _currentPage + 4 : pageCount;
    let dom = "";
    if (i + 1 >= start && i + 1 <= end) {
      dom = /*#__PURE__*/React.createElement("span", {
        tabIndex: ele + i,
        role: "button",
        className: i + 1 === _currentPage ? 'active page' : 'page',
        onClick: () => _onPageChange(i + 1),
        onKeyDown: () => _onPageChange(i + 1)
      }, i + 1);
    }
    return dom;
  }), /*#__PURE__*/React.createElement("button", {
    disabled: _currentPage === pageCount,
    className: "page active",
    type: "button",
    onKeyDown: () => nextPage(),
    onClick: () => nextPage()
  }, "Next"), showStartEndPage && /*#__PURE__*/React.createElement("button", {
    disabled: _currentPage === pageCount,
    type: "button",
    onKeyDown: () => _onPageChange(pageCount),
    onClick: () => _onPageChange(pageCount),
    className: "page active"
  }, /*#__PURE__*/React.createElement("i", {
    className: "arrow right"
  }), /*#__PURE__*/React.createElement("i", {
    className: "arrow right"
  }))));
};
export default Pagination;