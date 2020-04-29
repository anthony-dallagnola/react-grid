import React from 'react';
import { shallow, HTMLAttributes, mount, ReactWrapper } from 'enzyme';
import Grid from '../lib/Grid';
import { ERRORS } from '../lib/utils/constants';
import renderer from 'react-test-renderer';
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

  it('Icons ok', () => {
    const grid = mount(<Grid {...propsSort} />);
    let images = grid.find('SortIcon');
    // default sort
    expect(images).toHaveLength(3);
    for (let i = 0; i < images.length; i++) {
      expect(images.at(i).props().src).toBe('sort-both.svg');
    }
    images.at(1).simulate('click');
    // sort up
    images = grid.find('SortIcon');
    testExpectSrcFromArray(images, ['sort-both.svg', 'sort-up.svg', 'sort-both.svg']);

    images.at(1).simulate('click');
    // sort down
    images = grid.find('SortIcon');
    testExpectSrcFromArray(images, ['sort-both.svg', 'sort-down.svg', 'sort-both.svg']);
    images.at(1).simulate('click');
    // back to default sort
    images = grid.find('SortIcon');
    expect(images).toHaveLength(3);
    for (let i = 0; i < images.length; i++) {
      expect(images.at(i).props().src).toBe('sort-both.svg');
    }
    // click on third column
    images.at(1).simulate('click');
    images.at(2).simulate('click');
    images = grid.find('SortIcon');
    testExpectSrcFromArray(images, ['sort-both.svg', 'sort-both.svg', 'sort-up.svg']);
  });

  it('Default sort ok', () => {
    const defaultSort = {name: 'b', type: 1};
    const grid = mount(<Grid {...propsSort} defaultSort={defaultSort} />);
    const images = grid.find('SortIcon');
    testExpectSrcFromArray(images, ['sort-both.svg', 'sort-up.svg', 'sort-both.svg']);
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

describe('Snapshot on Grid', () => {
  it('renders correctly', () => {
    const rendered = renderer.create(
      <Grid {...propsSort} />,
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});

/**
 * Tests simple errors that render div with error as text
 *
 * @param {Object} props object containing the props to build the Grid component
 * @param {String} error expected error
 * @returns {Void} void
 */
function testExpectError(props: object, error: string): void {
  const grid = shallow(<Grid {...props} />);
  const div = grid.find('div');
  expect(div).toHaveLength(1);
  expect(grid.find('div').text()).toBe(error);
}

/**
 * Tests if all the img have the right src value
 *
 * @param {ReactWrapper} images list of image markups
 * @param {String[]} expectedList list of expected srcs
 * @returns {Void} void
 */
function testExpectSrcFromArray(images: ReactWrapper<HTMLAttributes, any, React.Component<{}, {}, any>>, expectedList: string[]): void {
  expect(images).toHaveLength(expectedList.length);
  for (let i = 0; i < expectedList.length; i++) {
    expect(images.at(i).props().src).toBe(expectedList[i]);
  }
}
