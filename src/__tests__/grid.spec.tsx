import React from 'react';
import { shallow } from 'enzyme';
import Grid from '../lib/Grid';
import { ERRORS } from '../lib/utils/constants';
import '../setupTests';

const propsHeader: any = {
  // debug: true,
};

describe('Header:', () => {
  it('Undefined or null', () => {
    let grid = shallow(<Grid {...propsHeader} />);
    expect(grid.find('div').text()).toBe(ERRORS.HEADER.UNDEFINED_OR_NULL);
    grid = shallow(<Grid {...propsHeader} headers={null} />);
    expect(grid.find('div').text()).toBe(ERRORS.HEADER.UNDEFINED_OR_NULL);
  });

  it('Empty', () => {
    const grid = shallow(<Grid {...propsHeader} headers={[]}/>);
    expect(grid.find('div').text()).toBe(ERRORS.HEADER.EMPTY);
  });

  it('Mixing single and double header', () => {
    const headers = ['Hello', ['There', ['and there']]];
    const grid = shallow(<Grid {...propsHeader} headers={headers} />);
    expect(grid.find('div').text()).toBe(ERRORS.HEADER.MIXING_SINGLE_AND_DOUBLE);
  });

  it('Invalid format', () => {
    /* single row headers */
    const headers = ['Hello', {}];
    let grid = shallow(<Grid {...propsHeader} headers={headers} />);
    expect(grid.find('div').text()).toBe(ERRORS.HEADER.INVALID_FORMAT);

    /* double row headers */
    // object instead of primitive
    let headers2 = [['Hello', ['']], {a: ['There', ['and there']]}];
    grid = shallow(<Grid {...propsHeader} headers={headers2} />);
    expect(grid.find('div').text()).toBe(ERRORS.HEADER.INVALID_FORMAT);
    // too many elements
    headers2 = [['Hello', ['']], ['There', ['and there'], 'also there']];
    grid = shallow(<Grid {...propsHeader} headers={headers2} />);
    expect(grid.find('div').text()).toBe(ERRORS.HEADER.INVALID_FORMAT);
    // first element of titles is an object
    const headers3 = [['Hello', ['']], [{}, ['and there']]];
    grid = shallow(<Grid {...propsHeader} headers={headers3} />);
    expect(grid.find('div').text()).toBe(ERRORS.HEADER.INVALID_FORMAT);
    // list of titles is a primitive
    headers2 = [['Hello', ['']], ['There', 'and there']];
    grid = shallow(<Grid {...propsHeader} headers={headers2} />);
    expect(grid.find('div').text()).toBe(ERRORS.HEADER.INVALID_FORMAT);
  });
});
// we add a valid headers parameter
const propsData = {
  ...propsHeader,
  headers: ['a', 'b', 'c'],
};
describe('Data: ', () => {
  it('Undefined or null', () => {
    let grid = shallow(<Grid {...propsData} />);
    expect(grid.find('div').text()).toBe(ERRORS.DATA.UNDEFINED_OR_NULL);
    grid = shallow(<Grid {...propsData} data={null} />);
    expect(grid.find('div').text()).toBe(ERRORS.DATA.UNDEFINED_OR_NULL);
  });
  it('Empty', () => {
    const grid = shallow(<Grid {...propsData} data={[]} />);
    expect(grid.find('div').text()).toBe(ERRORS.DATA.EMPTY);
  });
  it('Rows length mismatch header', () => {
    let data = [['a', 'b']];
    let grid = shallow(<Grid {...propsData} data={data} />);
    expect(grid.find('div').text()).toBe(ERRORS.DATA.LENGTH);
    data = [['a', 'b', 'c'], ['a', 'b']];
    grid = shallow(<Grid {...propsData} data={data} />);
    expect(grid.find('div').text()).toBe(ERRORS.DATA.LENGTH);
  });
  it('Data cell invalid format', () => {
    const data = [['a', 'b', []]];
    const grid = shallow(<Grid {...propsData} data={data} />);
    expect(grid.find('div').text()).toBe(ERRORS.DATA.INVALID_TYPE_CELL);
  });
  it('Data cell missing value field', () => {
    const data = [['a', 'b', {}]];
    const grid = shallow(<Grid {...propsData} data={data} />);
    expect(grid.find('div').text()).toBe(ERRORS.DATA.MISSING_VALUE_FIELD);
  });
});

const propsWeights = {
  ...propsData,
  data: [[1, 2, 3]],
};

describe('Weights: ', () => {
  it('length', () => {
    const weights = [1.2, 3];
    const grid = shallow(<Grid {...propsWeights} weights={weights} />);
    expect(grid.find('div').text()).toBe(ERRORS.WEIGHTS.LENGTH);
  });
  it('Invalid format', () => {
    const weights = ['a', 1, 2];
    const grid = shallow(<Grid {...propsWeights} weights={weights} />);
    expect(grid.find('div').text()).toBe(ERRORS.WEIGHTS.INVALID_FORMAT);
  });
});
