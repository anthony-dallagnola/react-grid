import { Sort } from './Sort';
import DataProps, { DataProps } from './DataProps';
import Primitive from './Primitive';

export interface GridProps {
  intitialized?: boolean,
  // only one option with this type but temporary
  headers: Primitive[],
  isSingleRowHeader: boolean,
  data: DataProps,
  weights: number[],
  weightsSum: number,
  sort: Sort,
}
