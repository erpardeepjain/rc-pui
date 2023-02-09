This Package contains below React UI Components available to use

* Multi Select Dropdown
* Currency Formatter 
* Search Input
* Pagination 

💥 [Working Demo - Stackblitz](https://stackblitz.com/edit/react-qgvr8r)

**Documentation is still incomplete, will try to update asap.**
**PR's for New Components are Welcome**

## Install

```
npm install --save @erpardeepjain/rc-pui
```

## Usage 

### Pagination

<img width="596" alt="Screenshot 2023-02-04 at 10 28 47 AM" src="https://user-images.githubusercontent.com/13163739/216749803-6b8c4dae-f122-4dc1-b72a-d0d70bf95db3.png">


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

### Currency Formatter

<img width="111" alt="Screenshot 2023-02-04 at 10 29 10 AM" src="https://user-images.githubusercontent.com/13163739/216749872-a282b790-85ea-4802-b6a6-396cda98024e.png">

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

### Search Input
                                                      
<img width="155" alt="Screenshot 2023-02-04 at 10 29 38 AM" src="https://user-images.githubusercontent.com/13163739/216749815-ff75426f-3682-487c-a76e-21d9dcdfd64b.png">

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

### Multi Select Dropdown

<img width="182" alt="Screenshot 2023-02-09 at 6 22 14 PM" src="https://user-images.githubusercontent.com/13163739/217821597-62aceceb-37dd-4a24-9e18-75abe6b90e2c.png">


| Name      | Description | Default
| --------  | ----------- | -----------
| name      | string      | N/A
| label     | string      | Select Multiple
| options   | array       | []
| selectAll | boolean     | false
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
    selectAll="true"
    onSelect={handleFilter}
/>

```
