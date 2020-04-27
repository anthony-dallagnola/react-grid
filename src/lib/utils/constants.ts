const ERRORS = {
  HEADER: {
    UNDEFINED_OR_NULL: 'You haven\'t sent any header',
    EMPTY: 'You have sent empty headers',
    MIXING_SINGLE_AND_DOUBLE: 'You can\'t mix single and double row headers',
    INVALID_FORMAT: 'Format of the header is invalid',
  },
  DATA: {
    UNDEFINED_OR_NULL: 'You haven\'t sent any data',
    EMPTY: 'You have sent empty data',
    LENGTH: 'Problem with the data length, it doesn\'t match the headers',
    INVALID_TYPE_CELL: 'The data cell is neither a Primitive nor an object',
    MISSING_VALUE_FIELD: 'The data cell is an object but missing `value` field',
  },
  WEIGHTS: {
    LENGTH: 'Problem with the weights length, it doesn\'t match the headers',
    INVALID_FORMAT: 'The weights has invalid format, it should be an array of numbers (int or float)',
  },
  DEFAULT_SORT: {
    INVALID_FORMAT: 'The default sort props has an invalid format',
    INEXISTANT_HEADER: 'The default sort props is based on an inexistant header',
  },
};

const PREFIX = 'react-cell-grid';

export {
  ERRORS,
  PREFIX,
};
