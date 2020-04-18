const React = require('react');
const ReactDOM = require('react-dom');
const Grid = require('../dist/Grid');

const dataJson = require('./data.json');

console.log('data: ', dataJson);

const headers = dataJson.cols;
const data = dataJson.data;

ReactDOM.render(
  <Grid
    headers={headers}
    weights={[1, 1.5, 5, 3, 1.5]}
    data={data}
  />,
  document.getElementById('root'));
