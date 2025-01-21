const FETCH_SUCCESS = 'FETCH_SUCCESS'
const FETCH_FAILED = 'FETCH_FAILED'
const LOADING_TRUE = 'LOADING_TRUE'
const LOADING_FALSE = 'LOADING_FALSE'
const initialState = {
    result: [],
    error: '',
    loading: false,
}

const searchResultReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_TRUE:
        return {
            ...state,
            loading: true,
        };

        case LOADING_FALSE:
        return {
            ...state,
            loading: false,
        };

    case FETCH_SUCCESS:
      return {
          ...state,
          result: action.payload,
          loading: false,
      };

    case FETCH_FAILED:
      return {
        ...state,
        error: (action.error),
        loading: false,
      };

    default:
      return state;
  }
};

export default searchResultReducer;