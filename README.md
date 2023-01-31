This Package contains below React UI Components available to use

* Pagination 
* Currency Formatter 
* Search Input

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

| Name        | Description | 
| ----------- | ----------- |
| value       | integer     |
| prefix      | string      |
| zeroAllowed | boolean     |
| noSpan      | boolean     |
| onlyComma   | boolean     |
| eleClass    | string      |


```js
import { CurrencyFormat } from '@erpardeepjain/rc-pui';
...
<CurrencyFormat prefix="$" value="123456789" zeroAllowed />

```

### `Search Input`

#### props
onChange, placeholder, waitTime, minSearchChar
| Name          | Description | 
| -----------   | ----------- |
| placeholder   | string      |
| waitTime      | intiger     |
| minSearchChar | intiger     |
| onChange      | function    |


```js
import { SearchInput } from '@erpardeepjain/rc-pui';
...
const onSearchCB = (val) => {
    setSearch(val);
};
...
<SearchInput onChange={onSearchCB} placeholder="Search Record" waitTime={300} minSearchChar={2} />

```
