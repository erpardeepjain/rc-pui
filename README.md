This Package contains below React UI Components available to use

* Documentation is still incomplete, will try to update asap, PR's for New Components are Welcomed *

### Install

Install using `npm install @erpardeepjain/rc-pui`

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

`<Pagination paginationConfig={paginationConfig} />`
const {pageCount, itemCount, currentPage, onPageChange, showLabel, showStartEndPage } = paginationConfig;

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


Example  - `<CurrencyFormat prefix="$" value="123456789" zeroAllowed />`

### `Search Input`

#### props
onChange, placeholder, waitTime, minSearchChar
| Name          | Description | 
| -----------   | ----------- |
| placeholder   | string      |
| waitTime      | intiger     |
| minSearchChar | intiger     |
| onChange      | function    |

Example  - `<SearchInput onChange={onSearchCB} placeholder="Search Record" waitTime={300} minSearchChar={2} />`
