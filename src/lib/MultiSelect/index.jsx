/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect, useRef } from 'react';
import './index.css';

function useOutsideAlerter(ref) {
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          console.log("You clicked outside of me!");
        }
      }
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
}

const MultiSelect = ({ name, label, options, onSelect }) => {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    const [showList, setShowList] = useState(false);
    const [selectionArr, setSelectionArr] = useState([]);
    const [optionsList, setOptionsList] = useState([]);

    useEffect(() => {
        const alterListArr = [];
        options?.forEach(ele => {
            alterListArr.push({label: ele, selected: false});
        });
        setOptionsList(alterListArr);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const _onSelect = (val) => {
        const _selectionArr = selectionArr;
        const itemIndex = _selectionArr.indexOf(val?.label);
        if(itemIndex !== -1) {
            val.selected = false;
            _selectionArr.splice(itemIndex, 1);
        } else {
            val.selected = true;
            _selectionArr.push(val?.label);
        }
        setSelectionArr(_selectionArr);
        onSelect(selectionArr, name);
    }

    return (
        <div className="multiSelectBox" ref={wrapperRef}>
            <span onClick={() => setShowList(!showList)} className="selectLabel">
                {label || 'Select Multiple'}
                <span className={showList ? "arrow_up" : "arrow_down"} />
            </span>
            <div className="listItemsBox">
                {showList && optionsList?.length > 0 && optionsList.map(ele => (
                    <span onClick={() => _onSelect(ele)} value={ele?.label} className="selectItem">
                        <span className={ele?.selected ? "selectedFlag" : "unselectedFlag"} />
                        {ele?.label[0].toUpperCase() + ele?.label?.slice(1,ele?.label?.length)}
                    </span>
                ))}
            </div>
        </div>
    )
};

export default MultiSelect;