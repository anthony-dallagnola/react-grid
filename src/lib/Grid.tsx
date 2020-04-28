import React, {useState, useEffect} from 'react';
import { isPrimitive } from './utils/functions';
import { ERRORS, PREFIX } from './utils/constants';
import { Primitive } from './models/Primitive';
import sortUpIcon from './assets/sort-up.svg';
import sortDownIcon from './assets/sort-down.svg';
import sortBothIcon from './assets/sort-both.svg';
import { Sort } from './models/enums/Sort.enum';
import { DataCell } from './models/DataCell';
import { SortIcon, GridContainer, DivHeaderCell, GridHeader, GridRow, DivDataCell, DivDataCellContent } from './Grid.style';
import { GridProps } from './models/GridProps';
import { UserProps } from './models/UserProps';

/**
 * Type guard function
 *
 * @param {Primitive | DataCell} cell cell
 * @returns {boolean} true if is DataCell
 */
function isDataCell(cell: Primitive | DataCell): cell is DataCell {
  return (cell as DataCell).value !== undefined;
}

/**
 * Extracts value for comparing
 * If it's a string it applies lowerCase
 *
 * @param {Primitive | DataCell} cell cell data
 * @returns {Primitive} value fo the cell
 */
const extractValue = (cell: Primitive | DataCell): Primitive => {
  if (isDataCell(cell)) {
    return typeof cell.value === 'string' ? cell.value.toLowerCase() : cell.value;
  } else {
    return typeof cell === 'string' ? cell.toLowerCase() : cell;
  }
};


/**
 * Initializes grid variable from props
 *
 * @param {UserProps} props props
 * @returns {GridProps} props
 */
function init(props: UserProps): GridProps {
  return {
    intitialized: false,
    headers: props.headers,
    isSingleRowHeader: props.headers ? props.headers.filter((e) => isPrimitive(e)).length > 0 : false,
    data: props.data,
    weights: props.weights || [],
    weightsSum: 0,
    sort: props.defaultSort || {},
  };
}

let logger: any = {};
const Grid = (props: any): JSX.Element => {
  // disable logging if debug is not set
  if (props.debug) {
    logger = {
      log: (...args: any[]) => console.log(...[PREFIX+': '].concat(args)),
      warn: (...args: any[]) => console.warn(...[PREFIX+': '].concat(args)),
    };
  } else {
    logger = {
      log: () => { },
      warn: () => { },
    };
  }


  const [grid, setGrid] = useState(init(props));

  useEffect(() => {
    sortData();
  }, [grid.sort]);

  useEffect(() => {
    setGrid(init(props));
  }, [props]);

  logger.log('Data init: ', grid.data);
  logger.log('Data init: ', props.data);


  const sortData = () => {
    logger.log('sort data: ', grid.sort);
    if (typeof grid.sort === 'undefined' || typeof grid.sort.name === 'undefined' || typeof grid.sort.type === 'undefined') {
      return;
    }
    // get column number
    let index = 0;
    if (grid.isSingleRowHeader) {
      for (let i = 0; i < grid.headers.length; i++) {
        if (grid.headers[i] === grid.sort.name) {
          break;
        }
        index++;
      }
    } else {
      let found = false;
      for (let i = 0; i < grid.headers.length; i++) {
        for (let j = 0; j < grid.headers[i][1].length; j++) {
          if (grid.headers[i][1][j] === grid.sort.name) {
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
    let data: any[][];
    if (grid.sort.type === Sort.Both) {
      data = [].concat(props.data);
    } else {
      data = [].concat(props.data).sort((a: Primitive[] | DataCell[], b) => {
        let result: number;
        if (grid.sort.type === Sort.Asc) {
          result = extractValue(a[index]) > extractValue(b[index]) ? 1 : -1;
        } else {
          result = extractValue(b[index]) > extractValue(a[index]) ? 1 : -1;
        }
        return result;
      });
    }
    setGrid((oldGrid) => ({
      ...oldGrid,
      data,
    }));
  };

  const getWidthFromIndex = (index: number) => {
    return getWidth(grid.weights[index]);
  };

  const getWidth = (weight: number) => {
    return 'calc(' + (weight / grid.weightsSum * 100) + '% - 2px)';
  };

  logger.log('sort: ', grid.sort);
  const onChangeSort = (name: Primitive) => {
    if (grid.sort.name === name) {
      setGrid((oldGrid: GridProps) => ({
        ...oldGrid,
        sort: {
          ...oldGrid.sort,
          type: ((oldGrid.sort.type+1)%3),
        },
      }));
    } else {
      logger.log('ASC');
      setGrid((oldGrid: GridProps) => ({
        ...oldGrid,
        sort: {
          name,
          type: Sort.Asc,
        },
      }));
      // setSort({name, type: Sort.Asc});
    }
  };

  const getSortIcons = (name: Primitive) => {
    if (!props.sort) {
      return <></>;
    } else if (!grid.sort || grid.sort.name !== name || grid.sort.type === Sort.Both) {
      return <SortIcon onClick={() => onChangeSort(name)} src={sortBothIcon}/>;
    } else if (grid.sort.type === Sort.Asc) {
      return <SortIcon onClick={() => onChangeSort(name)} src={sortUpIcon}/>;
    } else {
      return <SortIcon onClick={() => onChangeSort(name)} src={sortDownIcon}/>;
    }
  };

  if (!grid.intitialized) {
    logger.log('headers: ', grid.headers);
    // check number of columns
    if (grid.headers == null) {
      return <div>{ERRORS.HEADER.UNDEFINED_OR_NULL}</div>;
    }
    if (grid.headers.length === 0) {
      return <div>{ERRORS.HEADER.EMPTY}</div>;
    }
    let numberColumns = 0;
    // let isSingleRowHeader = null;

    for (const header of grid.headers) {
      const isHeaderPrimitive = isPrimitive(header);
      if (!isHeaderPrimitive && !Array.isArray(header)) {
        return <div>{ERRORS.HEADER.INVALID_FORMAT}</div>;
      }
      if (grid.isSingleRowHeader !== isHeaderPrimitive) {
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

    logger.log('data: ', grid.data);

    if (grid.data == null) {
      return <div>{ERRORS.DATA.UNDEFINED_OR_NULL}</div>;
    }
    if (grid.data.length === 0) {
      return <div>{ERRORS.DATA.EMPTY}</div>;
    }

    for (const row of grid.data) {
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
    let weights = grid.weights;
    if (weights.length === 0) {
      weights = Array(numberColumns).fill(0, 0).map(() => 1);
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
    const weightsSum = weights.reduce((total: any, value: any) => total + value);
    logger.log('weightsSum: ', weightsSum);

    if (props.sort) {
      if (typeof props.defaultSort !== 'undefined') {
        if (typeof props.defaultSort !== 'object' || typeof props.defaultSort.name === 'undefined' || !isPrimitive(props.defaultSort.name) ||
         typeof props.defaultSort.type === 'undefined' || ![Sort.Both, Sort.Asc, Sort.Desc].includes(parseInt(grid.sort.type))) {
          return <div>{ERRORS.DEFAULT_SORT.INVALID_FORMAT}</div>;
        }
        if (grid.isSingleRowHeader) {
          if (!grid.headers.includes(props.defaultSort.name)) {
            return <div>{ERRORS.DEFAULT_SORT.INEXISTANT_HEADER}</div>;
          }
        } else if (!grid.headers.reduce((t: Primitive[], v: Primitive[][]) => t.concat(v[1]), []).includes(props.defaultSort.name)) {
          return <div>{ERRORS.DEFAULT_SORT.INEXISTANT_HEADER}</div>;
        }
      }
    } else if (props.defaultSort) {
      logger.warn('sortDefault is set but sort is not enabled with sort={true}');
    }
    setGrid((oldGrid) => ({
      ...oldGrid,
      intitialized: true,
      weights,
      weightsSum,
    }));
  }

  return (
    <>
      <GridContainer>
        {/* Header(s) */}
        {(() => {
          const headersRow = [];
          let result;
          if (Array.isArray(grid.headers[0])) {
            // we have double header format
            let weightIndex = 0;
            const topHeadersRow = [];
            const headersRowTemp = [];
            for (let i = 0; i < grid.headers.length; i++) {
              let weight = 0;
              for (let j = 0; j < grid.headers[i][1].length; j++) {
                headersRowTemp.push(
                  <DivHeaderCell key={grid.headers[i][1][j]+'_'+i+'_'+j} width={getWidthFromIndex(weightIndex)}>
                    <div>{grid.headers[i][1][j]}</div>
                    {getSortIcons(grid.headers[i][1][j])}
                  </DivHeaderCell>);
                weight += grid.weights[weightIndex++];
              }
              topHeadersRow.push(
                <DivHeaderCell key={grid.headers[i][0]+'_'+i} width={getWidth(weight)}>{grid.headers[i][0]}
                </DivHeaderCell>);
            }
            result = <>
              <GridHeader key={'header_0'} >{topHeadersRow}</GridHeader>
              <GridHeader key={'header_1'} >{headersRowTemp}</GridHeader>
            </>;
          } else {
            // single header
            for (let i = 0; i < grid.headers.length; i++) {
              headersRow.push(<DivHeaderCell key={grid.headers[i]} width={getWidthFromIndex(i)}>
                <div>{grid.headers[i]}</div>
                {/* <GetSortIcons name={headers[i]}/> */}
                {getSortIcons(grid.headers[i])}
              </DivHeaderCell>);
            }
            result = <GridHeader >{headersRow}</GridHeader>;
          }
          return result;
        })()}
        {/* Rows */}
        <div>
          {(() => {
            const dataRows = [];
            for (let i = 0; i < grid.data.length; i++) {
              // logger.log('data rendering [', i, ']: ', data[i]);
              dataRows.push(<GridRow key={'row_'+i} >{(() => {
                const dataRow = [];
                for (let j = 0; j < grid.data[i].length; j++) {
                  if (typeof grid.data[i][j] === 'object') {
                    dataRow.push(<DivDataCell key={grid.data[i][j].value+'_'+i+'_'+j} width={getWidthFromIndex(j)}>
                      <a href={grid.data[i][j]._href}><DivDataCellContent>{grid.data[i][j].value}</DivDataCellContent></a>
                    </DivDataCell>);
                  } else {
                    dataRow.push(
                      <DivDataCell key={grid.data[i][j]+'_'+i+'_'+j} width={getWidthFromIndex(j)}>
                        <DivDataCellContent>{grid.data[i][j]}</DivDataCellContent>
                      </DivDataCell>);
                  }
                }
                return dataRow;
              })()}</GridRow>);
            }
            return dataRows;
          })()}
        </div>
      </GridContainer>
    </>
  );
};

export default Grid;
