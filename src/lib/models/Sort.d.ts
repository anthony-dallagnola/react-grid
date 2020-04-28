import SortEnum from './enums/Sort.enum';
import { Primitive } from './Primitive';

export interface Sort {
  name: Primitive,
  type: SortEnum
}
