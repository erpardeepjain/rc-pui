/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect, useRef } from 'react';
import './index.css';
const MultiSelect = ({
  name,
  title,
  options,
  onSelect,
  selectAll = false
}) => {
  const wrapperRef = useRef(null);
  const [allSelected, setAllSelected] = useState(false);
  const [selectionArr, setSelectionArr] = useState([]);
  const [optionsList, setOptionsList] = useState([]);
  const [showList, setShowList] = useState(false);
  useEffect(() => {
    const handleClickOutside = event => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target) && showList) {
        setShowList(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef, showList]);
  useEffect(() => {
    const alterListArr = [];
    options?.forEach(ele => {
      alterListArr.push({
        label: ele,
        selected: false
      });
    });
    setOptionsList(alterListArr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const _onSelect = val => {
    if (val === "all") {
      setSelectionArr(!allSelected ? options : []);
      onSelect(!allSelected ? options : [], name);
      setAllSelected(!allSelected);
      optionsList.forEach(ele => ele.selected = false);
      setShowList(false);
    } else {
      const _selectionArr = selectionArr;
      const itemIndex = _selectionArr.indexOf(val?.label);
      if (itemIndex !== -1) {
        val.selected = false;
        _selectionArr.splice(itemIndex, 1);
      } else {
        val.selected = true;
        _selectionArr.push(val?.label);
      }
      setSelectionArr(_selectionArr);
      onSelect(selectionArr, name);
      if (_selectionArr?.length === options?.length) {
        setAllSelected(true);
      } else {
        setAllSelected(false);
      }
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "multiSelectBox",
    ref: wrapperRef
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => setShowList(!showList),
    className: "selectLabel"
  }, title || 'Select Multiple', /*#__PURE__*/React.createElement("span", {
    className: showList ? "arrow_up" : "arrow_down"
  })), /*#__PURE__*/React.createElement("div", {
    className: "listItemsBox"
  }, showList && selectAll && /*#__PURE__*/React.createElement("span", {
    onClick: () => _onSelect("all"),
    value: "all",
    className: "selectItem"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    readOnly: true,
    checked: allSelected
  }), "All"), showList && optionsList?.length > 0 && optionsList.map(ele => /*#__PURE__*/React.createElement("span", {
    onClick: () => _onSelect(ele),
    key: `multiSelect-${ele}`,
    value: ele?.label,
    className: "selectItem"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    readOnly: true,
    checked: ele?.selected || allSelected
  }), ele?.label[0].toUpperCase() + ele?.label?.slice(1, ele?.label?.length)))));
};
export default MultiSelect;