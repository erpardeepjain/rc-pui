/* eslint-disable no-underscore-dangle */
import React, {useState} from 'react';
import {
    Pagination,
    CurrencyFormat,
    SearchInput,
    MultiSelect,
} from '../lib';

const Demo = () => {
    const [search, setSearch] = useState('');

    const onSearchCB = (val) => {
        setSearch(val);
    };

    const onPageChange = (val) => {
        console.log(val);
    };

    const paginationConfig = {
        itemCount: 200,
        pageCount: 10,
        onPageChange: onPageChange,
        showLabel: true,
        showStartEndPage: true,
    };

    const handleFilter = (selectedItems) => {
        console.log(selectedItems);
    };
    return (
        <div>
            <div>
                <p>Search Input Component output - {search}</p>
                <SearchInput
                onChange={onSearchCB}
                placeholder="Search Record"
                waitTime={300}
                minSearchChar={2}
                />
                <hr />
            </div>

            <div>
                <p>Currency Format Component</p>
                <CurrencyFormat prefix="$" value="123456789" zeroAllowed />
                <hr />
            </div>

            <div>
                <p>Multi Select Dropdown Component</p>
                <MultiSelect
                title="Status"
                options={['completed', 'failed', 'processing']}
                name="status"
                selectAll="true"
                onSelect={handleFilter}
                />
                <hr />
            </div>

            <div>
                <p>Pagination Component</p>
                <Pagination paginationConfig={paginationConfig} />
            </div>
        </div>
    )
};

export default Demo;
