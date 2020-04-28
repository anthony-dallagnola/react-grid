export interface UserProps {
  debug?: boolean,
  headers: Primitive[],
  data: Primitive[][],
  weights?: number[],
  sort?: boolean,
  defaultSort?: Sort,
}
