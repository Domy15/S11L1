const FETCH_SUCCESS = 'FETCH_SUCCESS'
const FETCH_FAILED = 'FETCH_FAILED'
const initialState = {
    result: [],
    error: '',
}

const searchResultReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
          ...state,
          result: action.payload,
      };

    case FETCH_FAILED:
      return {
        ...state,
        error: (action.error),
      };

    default:
      return state;
  }
};

export default searchResultReducer;