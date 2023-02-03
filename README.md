This Package contains below React UI Components available to use

* Multi Select Dropdown
* Currency Formatter 
* Search Input
* Pagination 

* [Working Demo - Stackblitz](https://stackblitz.com/edit/react-qgvr8r)

** Documentation is still incomplete, will try to update asap, PR's for New Components are Welcomed

## Install

#### [npm](https://www.npmjs.com/package/toastr)
```
npm install --save @erpardeepjain/rc-pui
```

### Usage 

### `Pagination`

#### props

| Name              | Description      
| -----------       | -----------      
| pageCount         | number
| itemCount         | number             
| currentPage       | number             
| onPageChange      | function             
| showLabel         | boolean             
| showStartEndPage  | boolean     

```js
import { Pagination } from '@erpardeepjain/rc-pui';
...
const {pageCount, itemCount, currentPage, onPageChange, showLabel, showStartEndPage } = paginationConfig;
...
<Pagination paginationConfig={paginationConfig} />

```

### `Currency Formatter`

#### props

| Name        | Description | Default
| ----------- | ----------- | -----------
| value       | integer     | N/A
| prefix      | string      | N/A
| zeroAllowed | boolean     | true
| noSpan      | boolean     | N/A
| onlyComma   | boolean     | N/A
| eleClass    | string      | N/A


```js
import { CurrencyFormat } from '@erpardeepjain/rc-pui';
...
<CurrencyFormat prefix="$" value="123456789" zeroAllowed />

```

### `Search Input`

| Name          | Description | Default
| -----------   | ----------- | -----------
| placeholder   | string      | Search
| waitTime      | intiger     | 500
| minSearchChar | intiger     | 2
| onChange      | function    | function


```js
import { SearchInput } from '@erpardeepjain/rc-pui';
...
const onSearchCB = (searchedValue) => {
    console.log(searchedValue);
};
...
<SearchInput onChange={onSearchCB} placeholder="Search Record" waitTime={300} minSearchChar={2} />

```

### `Multi Select Dropdown`

| Name      | Description | Default
| --------  | ----------- | -----------
| name      | string      | N/A
| label     | string      | Select Multiple
| options   | array       | []
| onSelect  | function    | function


```js
import { MultiSelect } from '@erpardeepjain/rc-pui';
...
const handleFilter = (selectedItems) => {
    console.log(selectedItems);
};
...
<MultiSelect 
    title="Status"
    options={['completed', 'failed', 'processing']} 
    name="status"
    onSelect={handleFilter}
/>

```
