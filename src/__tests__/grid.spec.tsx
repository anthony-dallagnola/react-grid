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
    testExpectError({ ...propsHeader }, ERRORS.HEADER.UNDEFINED_OR_NULL);
    testExpectError({ ...propsHeader, headers: null }, ERRORS.HEADER.UNDEFINED_OR_NULL);
  });

  it('Empty', () => {
    testExpectError({ ...propsHeader, headers: [] }, ERRORS.HEADER.EMPTY);
  });

  it('Mixing single and double header', () => {
    testExpectError({ ...propsHeader, headers: ['Hello', ['There', ['and there']]] }, ERRORS.HEADER.MIXING_SINGLE_AND_DOUBLE);
  });

  it('Invalid format', () => {
    /* single row headers */
    testExpectError({ ...propsHeader, headers: ['Hello', {}] }, ERRORS.HEADER.INVALID_FORMAT);

    /* double row headers */
    // object instead of primitive
    testExpectError({ ...propsHeader, headers: [['Hello', ['']], { a: ['There', ['and there']] }] }, ERRORS.HEADER.INVALID_FORMAT);
    // too many elements
    testExpectError({ ...propsHeader, headers: [['Hello', ['']], ['There', ['and there'], 'also there']] }, ERRORS.HEADER.INVALID_FORMAT);
    // first element of titles is an object
    testExpectError({ ...propsHeader, headers: [['Hello', ['']], [{}, ['and there']]] }, ERRORS.HEADER.INVALID_FORMAT);
    // list of titles is a primitive
    testExpectError({ ...propsHeader, headers: [['Hello', ['']], ['There', 'and there']] }, ERRORS.HEADER.INVALID_FORMAT);
  });
});
// we add a valid headers parameter
const propsData = {
  ...propsHeader,
  headers: ['a', 'b', 'c'],
};
describe('Data: ', () => {
  it('Undefined or null', () => {
    testExpectError({ ...propsData }, ERRORS.DATA.UNDEFINED_OR_NULL);
    testExpectError({ ...propsData, data: null }, ERRORS.DATA.UNDEFINED_OR_NULL);
  });
  it('Empty', () => {
    testExpectError({ ...propsData, data: [] }, ERRORS.DATA.EMPTY);
  });
  it('Rows length mismatch header', () => {
    testExpectError({ ...propsData, data: [['a', 'b']] }, ERRORS.DATA.LENGTH);
    testExpectError({ ...propsData, data: [['a', 'b', 'c'], ['a', 'b']] }, ERRORS.DATA.LENGTH);
  });
  it('Data cell invalid format', () => {
    testExpectError({ ...propsData, data: [['a', 'b', []]] }, ERRORS.DATA.INVALID_TYPE_CELL);
  });
  it('Data cell missing value field', () => {
    testExpectError({ ...propsData, data: [['a', 'b', {}]] }, ERRORS.DATA.MISSING_VALUE_FIELD);
  });
});

const propsWeights = {
  ...propsData,
  data: [[1, 2, 3]],
};

describe('Weights: ', () => {
  it('Length', () => {
    testExpectError({ ...propsWeights, weights: [1.2, 3] }, ERRORS.WEIGHTS.LENGTH);
  });
  it('Invalid format', () => {
    testExpectError({ ...propsWeights, weights: ['a', 1, 2] }, ERRORS.WEIGHTS.INVALID_FORMAT);
  });
});


const propsSort = {
  ...propsWeights,
  sort: true,
};
describe('Sort: ', () => {
  it('Icons not created', () => {
    const grid = shallow(<Grid {...propsSort} sort={false} />);
    const images = grid.find('SortIcon');
    expect(images).toHaveLength(0);
  });

  it('Icons created', () => {
    const grid = shallow(<Grid {...propsSort} />);
    const images = grid.find('SortIcon');
    expect(images).toHaveLength(3);
    for (let i = 0; i < images.length; i++) {
      expect(images.at(i).props().src).toBe('sort-both.svg');
    }
  });

  it('Default sort ok', () => {
    const defaultSort = {name: 'b', type: 1};
    const grid = shallow(<Grid {...propsSort} defaultSort={defaultSort} />);
    const images = grid.find('SortIcon');
    expect(images).toHaveLength(3);
    expect(images.at(0).props().src).toBe('sort-both.svg');
    expect(images.at(1).props().src).toBe('sort-up.svg');
    expect(images.at(2).props().src).toBe('sort-both.svg');
  });

  it('Default sort invalid format', () => {
    testExpectError({...propsSort, defaultSort: {}}, ERRORS.DEFAULT_SORT.INVALID_FORMAT);
    testExpectError({...propsSort, defaultSort: []}, ERRORS.DEFAULT_SORT.INVALID_FORMAT);
    testExpectError({...propsSort, defaultSort: {name: 'a'}}, ERRORS.DEFAULT_SORT.INVALID_FORMAT);
    testExpectError({...propsSort, defaultSort: {type: 0}}, ERRORS.DEFAULT_SORT.INVALID_FORMAT);
    testExpectError({...propsSort, defaultSort: {name: ['a'], type: 0}}, ERRORS.DEFAULT_SORT.INVALID_FORMAT);
    testExpectError({...propsSort, defaultSort: {name: {a: 'a'}, type: 0}}, ERRORS.DEFAULT_SORT.INVALID_FORMAT);
    testExpectError({...propsSort, defaultSort: {name: null, type: 0}}, ERRORS.DEFAULT_SORT.INVALID_FORMAT);
    testExpectError({...propsSort, defaultSort: {name: 'a', type: 'a'}}, ERRORS.DEFAULT_SORT.INVALID_FORMAT);
    testExpectError({...propsSort, defaultSort: {name: 'a', type: ['a']}}, ERRORS.DEFAULT_SORT.INVALID_FORMAT);
    testExpectError({...propsSort, defaultSort: {name: 'a', type: {a: 'a'}}}, ERRORS.DEFAULT_SORT.INVALID_FORMAT);
    testExpectError({...propsSort, defaultSort: {name: 'a', type: null}}, ERRORS.DEFAULT_SORT.INVALID_FORMAT);
  });

  it('Default sort on inexisting header', () => {
    testExpectError({ ...propsSort, defaultSort: { name: 'd', type: 0 } }, ERRORS.DEFAULT_SORT.INEXISTANT_HEADER);
    testExpectError({ ...propsSort, headers: [['t', ['a', 'b']], ['t2', ['c']]], defaultSort: { name: 'd', type: 0 } }, ERRORS.DEFAULT_SORT.INEXISTANT_HEADER);
  });
});

/**
 * Tests simple errors that render div with error as text
 *
 * @param {Object} props object containing the props to build the Grid component
 * @param {String} error expected error
 * @returns {Void} void
 */
function testExpectError(props: object, error: string) {
  const grid = shallow(<Grid {...props} />);
  const div = grid.find('div');
  expect(div).toHaveLength(1);
  expect(grid.find('div').text()).toBe(error);
}
