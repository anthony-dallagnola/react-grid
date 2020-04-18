// import * as React from 'react';
import React, {useState} from 'react';
import './Grid.scss';
import { isPrimitive } from './utils/functions';
import { ERRORS, PREFIX } from './utils/constants';

const logger: any = {};
const Grid = (props: any): JSX.Element => {
  // disable logging if debug is not set
  if (props.debug) {
    logger.log = (...args: any[]) => console.log(...[PREFIX+': '].concat(args));
  } else {
    logger.log = () => { };
  }

  const [ready, setReady] = useState(false);
  const headers = props.headers;
  const data = props.data;
  const [weights, setWeights] = useState<number[]>(props.weights ? props.weights : []);
  const [weightsSum, setWeightsSum] = useState<number>(0);


  if (!ready) {
    logger.log('headers: ', headers);
    // check number of columns
    if (headers == null) {
      return <div>{ERRORS.HEADER.UNDEFINED_OR_NULL}</div>;
    }
    if (headers.length === 0) {
      return <div>{ERRORS.HEADER.EMPTY}</div>;
    }
    let numberColumns = 0;
    let isSingleRowHeader = null;

    for (const header of headers) {
      const isHeaderPrimitive = isPrimitive(header);
      if (!isHeaderPrimitive && !Array.isArray(header)) {
        return <div>{ERRORS.HEADER.INVALID_FORMAT}</div>;
      }
      if (isSingleRowHeader === null) {
        isSingleRowHeader = isHeaderPrimitive;
      }
      if (isSingleRowHeader !== isHeaderPrimitive) {
        return <div>{ERRORS.HEADER.MIXING_SINGLE_AND_DOUBLE}</div>;
      }
      if (isHeaderPrimitive) {
        numberColumns++;
      } else if (Array.isArray(header) && header.length === 2 && isPrimitive(header[0]) && Array.isArray(header[1])) {
        numberColumns+=header[1].length;
      } else {
        return <div>{ERRORS.HEADER.INVALID_FORMAT}</div>;
      }
    }
    logger.log('numberColumns: ', numberColumns);

    logger.log('data: ', data);

    if (data == null) {
      return <div>{ERRORS.DATA.UNDEFINED_OR_NULL}</div>;
    }
    if (data.length === 0) {
      return <div>{ERRORS.DATA.EMPTY}</div>;
    }

    for (const row of data) {
      if (row.length !== numberColumns) {
        return <div>{ERRORS.DATA.LENGTH}</div>;
      }
      for (const cell of row) {
        if (isPrimitive(cell)) {

        } else if (typeof cell === 'object') {
          if (Array.isArray(cell)) {
            return <div>{ERRORS.DATA.INVALID_TYPE_CELL}</div>;
          } else if (!(cell as Object).hasOwnProperty('value')) {
            return <div>{ERRORS.DATA.MISSING_VALUE_FIELD}</div>;
          }
        }
      }
    }
    // headers.length is wrong for double header
    if (weights.length === 0) {
      setWeights(Array(numberColumns).fill(0, 0).map(() => 1));
    } else if (weights.length !== numberColumns) {
      return <div>{ERRORS.WEIGHTS.LENGTH}</div>;
    } else {
      for (const weight of weights) {
        if (typeof weight !== 'number') {
          return <div>{ERRORS.WEIGHTS.INVALID_FORMAT}</div>;
        }
      }
    }
    logger.log('weights: ', weights);
    setWeightsSum(weights.reduce((total: any, value: any) => total + value));
    logger.log('weightsSum: ', weightsSum);
    setReady(true);
  }


  const getWidthFromIndex = (index: number) => {
    return getWidth(weights[index]);
  };

  const getWidth = (weight: number) => {
    return 'calc(' + (weight / weightsSum * 100) + '% - 2px';
  };

  // if (!ready) {
  //   return <div>Loading</div>;
  // }

  return (
    <>
      <div className='react-cell-grid-container'>
        {/* Header(s) */}
        {(() => {
          const headersRow = [];
          let result;
          if (typeof headers[0] === 'object') {
            // we have double header format
            let weightIndex = 0;
            const topHeadersRow = [];
            const headersRowTemp = [];
            for (let i = 0; i < headers.length; i++) {
              let weight = 0;
              for (let j = 0; j < headers[i][1].length; j++) {
                headersRowTemp.push(<div key={headers[i][1][j]+'_'+i+'_'+j} className='react-cell-grid-cell react-cell-grid-header-cell' style={{ width: getWidthFromIndex(weightIndex) }}>
                  {headers[i][1][j]}
                </div>);
                weight += weights[weightIndex++];
              }
              topHeadersRow.push(<div key={headers[i][0]+'_'+i} className='react-cell-grid-cell react-cell-grid-header-cell' style={{ width: getWidth(weight) }}>{headers[i][0]}</div>);
            }
            result = <>
              <div key={'header_0'} className='react-cell-grid-header'>{topHeadersRow}</div>
              <div key={'header_1'} className='react-cell-grid-header'>{headersRowTemp}</div>
            </>;
          } else {
            // single header
            for (let i = 0; i < headers.length; i++) {
              headersRow.push(<div key={headers[i]} className='react-cell-grid-cell react-cell-grid-header-cell' style={{ width: getWidthFromIndex(i) }}>{headers[i]}</div>);
            }
            result = <div className='react-cell-grid-header'>{headersRow}</div>;
          }
          return result;
        })()}
        {/* Rows */}
        <div className='react-cell-grid-rows'>
          {(() => {
            const dataRows = [];
            for (let i = 0; i < data.length; i++) {
              dataRows.push(<div key={'row_'+i} className='react-cell-grid-row'>{(() => {
                const dataRow = [];
                for (let j = 0; j < data[i].length; j++) {
                  if (typeof data[i][j] === 'object') {
                    dataRow.push(<div key={data[i][j].value+'_'+i+'_'+j} className='react-cell-grid-cell react-cell-grid-data-cell' style={{ width: getWidthFromIndex(j) }}>
                      <a href={data[i][j]._href}><div>{data[i][j].value}</div></a>
                    </div>);
                  } else {
                    dataRow.push(
                      <div key={data[i][j]+'_'+i+'_'+j} className='react-cell-grid-cell react-cell-grid-data-cell' style={{ width: getWidthFromIndex(j) }}>
                        <div>{data[i][j]}</div>
                      </div>);
                  }
                }
                return dataRow;
              })()}</div>);
            }
            return dataRows;
          })()}
        </div>
      </div>
    </>
  );
};

export default Grid;
