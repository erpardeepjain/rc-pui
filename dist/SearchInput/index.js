/* eslint-disable no-underscore-dangle */
import React from 'react';
const SearchInput = ({
  onChange,
  placeholder,
  waitTime,
  minSearchChar
}) => {
  let tempInterval = '';
  const _handleChange = val => {
    const searchedKeywrod = val.target.value.trim();
    clearTimeout(tempInterval);
    tempInterval = setTimeout(() => {
      const qp = searchedKeywrod.length > (minSearchChar || 2) ? searchedKeywrod : "";
      onChange(qp);
    }, waitTime || 500);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "search-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "position-relative"
  }, /*#__PURE__*/React.createElement("input", {
    className: "form-control",
    type: "search",
    onChange: _handleChange,
    placeholder: placeholder || "Search"
  }), /*#__PURE__*/React.createElement("i", {
    className: "mdi mdi-magnify search-icon"
  })));
};
export default SearchInput;