import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Grid from '../../lib/Grid';

import dataJson from './data.json';

console.log('data: ', dataJson);

const headers = dataJson.cols;
const data = dataJson.data;

ReactDOM.render(
  <div style={{width: '70%', margin: 'auto'}}>
    <Grid
      headers={headers}
      weights={[1, 1.5, 5, 3, 1.5]}
      data={data}
    >

    </Grid>
  </div>,
  document.getElementById('root'));
