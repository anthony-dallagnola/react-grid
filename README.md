# Grid component for React
This component was built for myself as I didn't find any grid component I liked for free. I'm putting it here so it may help others. It is gonna be very basic at first but I will try adding new functionalities along the way. Feel free to ask if you have some needs on your own that I could add.

## Installation
npm install --save react-cell-grid

## Preview
![Preview image](https://github.com/anthony-dallagnola/react-grid/blob/master/public/preview.png)

## Data 
### Headers
This component handles single or double headers rows in the `headers` variable
For Single row headers, the expected format is an array of strings, each string is a differennt column
```
['header1', 'header2', 'header3', 'header4', ...]
```
For Double rows headers, there is only one format accepted at the moment which is an array of arrays containing the super title and an array of titles
```
[['top header 1', ['header1', 'header2', 'header3']], ['top header 2', ['header4']], ...]
```
will result in a 'top header 1' on top of 'header1', 'header2' and 'header3' and 'top header 2' with the size of the combined 3 headers in top of 'header4'

### Weights
The grid takes all the width set of the parent element
To set the size of the header there is an optional `weights` variable, if not set all headers have the same size
You can set the weights the way you want, integers or floats and the sum can be anything it will just sum them and divide
```
[1,0.5,2]
```

### Data
To make the data is displayed in the right order you have to format the data accordingly. The grid component will be waiting for an array of arrays, it must match the order on the headers part. 
There are two ways to send the data, either a primitive, string, number, boolean or an object where the displayed value must be stored in a value key.
The object format allows to do some other things to the cell as follow
  * _href: 'value' to redirect the user on the desired page when click on the cell. It's all for now but the functionalities will add up along the way. It accepts relative or absolute paths
```
[
  ['1', {value:'2',_href:'https://github.com'}, '3'],
  ['4', 5, '6'],
  ['7', '8', '9']
]
```
will create a 3x3 Grid plus headers

### Sort
To add the ability to sort each column, in single row it is the headers row and double row only the bottom row, you can set the sort props to true. It will enable icons on each column at first if no default is set all columns have double arrowed icon, if you can on one it will sort by ascending order and let top arrow, another click will sort by descending order and another will come back to no sort.
To specify a default sorted column, use the defaultSort props, with an object containing the name of the column key `name` which be equal to an header column and the sort type in key `type` 0 for default, 1 for ascending and 2 for descending.
```
{
  name: 'header1',
  type: 1
}
```

## License
MIT