This Package contains below React UI Components available to use
### `Pagination`

### Install

Install using `npm install @erpardeepjain/rc-pui`

### Usage 

#### Pagination props

| Name              | Description      
| -----------       | -----------      
| pageCount         | number
| itemCount         | number             
| currentPage       | number             
| onPageChange      | function             
| showLabel         | boolean             
| showStartEndPage  | boolean     

<Pagination paginationConfig={paginationConfig} />
const {pageCount, itemCount, currentPage, onPageChange, showLabel, showStartEndPage } = paginationConfig;

### `Currency Formatter`

#### Currency props

| Name        | Description | 
| ----------- | ----------- |
| value       | integer     |
| prefix      | string      |
| zeroAllowed | boolean     |
| noSpan      | boolean     |
| onlyComma   | boolean     |
| eleClass    | string      |


Example  - <CurrencyFormat prefix="$" value="123456789" zeroAllowed />
