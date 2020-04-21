import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Grid from '../../../src/lib/Grid';

import dataJson from './data.json';

const headers = dataJson.cols;
const data = dataJson.data;

ReactDOM.render(
  <div style={{width: '70%', margin: 'auto'}}>
    <Grid
      debug={true}
      headers={headers}
      // weights={[1, 1.5, 5]}
      data={data}
      sort={true}
    >

    </Grid>
  </div>,
  document.getElementById('root'));
