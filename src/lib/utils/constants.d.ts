declare const ERRORS: {
    HEADER: {
        UNDEFINED_OR_NULL: string;
        EMPTY: string;
        MIXING_SINGLE_AND_DOUBLE: string;
        INVALID_FORMAT: string;
    };
    DATA: {
        UNDEFINED_OR_NULL: string;
        EMPTY: string;
        LENGTH: string;
        INVALID_TYPE_CELL: string;
        MISSING_VALUE_FIELD: string;
    };
    WEIGHTS: {
        LENGTH: string;
        INVALID_FORMAT: string;
    };
};
declare const PREFIX = "react-cell-grid";
export { ERRORS, PREFIX, };
