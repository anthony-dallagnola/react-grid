import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Grid from '../../lib/Grid';

import dataJson from './data.json';


const cols = dataJson.cols;
const headers = [
  ['', [cols[0]]], ['movie', cols.slice(1, 4)], ['', [cols[4]]],
];
const data = dataJson.data;

ReactDOM.render(
  <div style={{width: '70%', margin: 'auto'}}>
    <Grid
      debug={true}
      headers={headers}
      weights={[1, 1.5, 5, 3, 1.5]}
      data={data}
    >

    </Grid>
  </div>,
  document.getElementById('root'));
