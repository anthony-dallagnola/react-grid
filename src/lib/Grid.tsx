import React, {useState, useEffect} from 'react';
import { isPrimitive } from './utils/functions';
import { ERRORS, PREFIX } from './utils/constants';
import { Primitive } from './models/Primitive';
import sortUpIcon from './assets/sort-up.svg';
import sortDownIcon from './assets/sort-down.svg';
import sortBothIcon from './assets/sort-both.svg';
import { Sort } from './models/enums/Sort.enum';
import './Grid.scss';
import { DataCell } from './models/DataCell';

const logger: any = {};
const Grid = (props: any): JSX.Element => {
  // disable logging if debug is not set
  if (props.debug) {
    logger.log = (...args: any[]) => console.log(...[PREFIX+': '].concat(args));
  } else {
    logger.log = () => { };
  }

  const [ready, setReady] = useState(false);
  const [headers, setHeaders] = useState(props.headers);
  const [isSingleRowHeader, setIsSingleHeader] = useState<boolean>();
  const [data, setData] = useState(props.data);
  const [weights, setWeights] = useState<number[]>(props.weights ? props.weights : []);
  const [weightsSum, setWeightsSum] = useState<number>(0);
  const [sort, setSort] = useState(props.defaultSort ? props.defaultSort : {});

  useEffect(() => {
    // if (sortData) {
    sortData();
    // }
  }, [sort]);

  useEffect(() => {
    setHeaders(props.headers);
    setData(props.data);
    setWeights(props.weights ? props.weights : []);
    setSort(props.defaultSort ? props.defaultSort : {});
    setReady(false);
  }, [props]);

  logger.log('Data init: ', data);
  logger.log('Data init: ', props.data);


  const extractValue = (cell: Primitive | DataCell) => {
    if (isPrimitive(cell)) {
      if (typeof cell === 'string') {
        return String(cell).toLowerCase();
      } else {
        return cell;
      }
    } else {
      if (typeof cell === 'string') {
        return String((cell as DataCell).value).toLowerCase();
      } else {
        return (cell as DataCell).value;
      }
    }
  };

  const sortData = () => {
    logger.log('sort data: ', sort);
    if (typeof sort.name === 'undefined' || typeof sort.type === 'undefined') {
      return;
    }
    // get column number
    let index = 0;
    if (isSingleRowHeader) {
      for (let i = 0; i < headers.length; i++) {
        if (headers[i] === sort.name) {
          break;
        }
        index++;
      }
    } else {
      let found = false;
      for (let i = 0; i < headers.length; i++) {
        console.log('length i: ', headers.length);
        for (let j = 0; j < headers[i][1].length; j++) {
          console.log('length j: ', headers[i][1].length);
          if (headers[i][1][j] === sort.name) {
            found = true;
            break;
          }
          index++;
        }
        if (found) break;
      }
    }
    logger.log('column: ', index);
    // TODO check if index exceeds length
    if (sort.type === Sort.Both) {
      setData([].concat(props.data));
    } else {
      console.log('sort: ', sort.type);
      setData([].concat(props.data).sort((a: Primitive[] | DataCell[], b) => {
        let result: number;
        if (sort.type === Sort.Asc) {
          result = extractValue(a[index]) > extractValue(b[index]) ? 1 : -1;
        } else {
          result = extractValue(b[index]) > extractValue(a[index]) ? 1 : -1;
        }
        return result;
      }));
    }
  };

  const getWidthFromIndex = (index: number) => {
    return getWidth(weights[index]);
  };

  const getWidth = (weight: number) => {
    return 'calc(' + (weight / weightsSum * 100) + '% - 2px';
  };

  logger.log('sort: ', sort);
  const onChangeSort = (name: Primitive) => {
    if (sort.name === name) {
      setSort((oldSort: any) => ({
        ...oldSort,
        type: ((oldSort.type + 1) % 3),
      }));
    } else {
      logger.log('ASC');
      setSort({name, type: Sort.Asc});
    }
  };

  const getSortIcons = (name: Primitive) => {
    if (!props.sort) {
      return <></>;
    } else if (!sort || sort.name !== name || sort.type === Sort.Both) {
      return <img className='react-cell-grid-sort-icon' onClick={() => onChangeSort(name)} src={sortBothIcon}></img>;
    } else if (sort.type === Sort.Asc) {
      return <img className='react-cell-grid-sort-icon' onClick={() => onChangeSort(name)} src={sortUpIcon}></img>;
    } else {
      return <img className='react-cell-grid-sort-icon' onClick={() => onChangeSort(name)} src={sortDownIcon}></img>;
    }
  };


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
    // let isSingleRowHeader = null;

    for (const header of headers) {
      const isHeaderPrimitive = isPrimitive(header);
      if (!isHeaderPrimitive && !Array.isArray(header)) {
        return <div>{ERRORS.HEADER.INVALID_FORMAT}</div>;
      }
      if (typeof isSingleRowHeader === 'undefined') {
        // isSingleRowHeader = isHeaderPrimitive;
        setIsSingleHeader(isHeaderPrimitive);
      }
      if (isSingleRowHeader !== isHeaderPrimitive) {
        return <div>{ERRORS.HEADER.MIXING_SINGLE_AND_DOUBLE}</div>;
      }
      if (isHeaderPrimitive) {
        numberColumns++;
      } else if (Array.isArray(header) && header.length === 2 && isPrimitive(header[0]) && Array.isArray(header[1])) {
        numberColumns += header[1].length;
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
      return <></>;
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

  return (
    <>
      {logger.log('Refresh rendering Data init: ', data)}
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
                headersRowTemp.push(
                  <div key={headers[i][1][j]+'_'+i+'_'+j} className='react-cell-grid-cell react-cell-grid-header-cell' style={{ width: getWidthFromIndex(weightIndex) }}>
                    <div>{headers[i][1][j]}</div>
                    {getSortIcons(headers[i][1][j])}
                  </div>);
                weight += weights[weightIndex++];
              }
              topHeadersRow.push(
                <div key={headers[i][0]+'_'+i} className='react-cell-grid-cell react-cell-grid-header-cell' style={{ width: getWidth(weight) }}>{headers[i][0]}
                </div>);
            }
            result = <>
              <div key={'header_0'} className='react-cell-grid-header'>{topHeadersRow}</div>
              <div key={'header_1'} className='react-cell-grid-header'>{headersRowTemp}</div>
            </>;
          } else {
            // single header
            for (let i = 0; i < headers.length; i++) {
              headersRow.push(<div key={headers[i]} className='react-cell-grid-cell react-cell-grid-header-cell' style={{ width: getWidthFromIndex(i) }}>
                <div>{headers[i]}</div>
                {getSortIcons(headers[i])}
              </div>);
            }
            result = <div className='react-cell-grid-header'>{headersRow}</div>;
          }
          return result;
        })()}
        {/* Rows */}
        <div className='react-cell-grid-rows'>
          {(() => {
            logger.log('data rendering');
            const dataRows = [];
            for (let i = 0; i < data.length; i++) {
              // logger.log('data rendering [', i, ']: ', data[i]);
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
