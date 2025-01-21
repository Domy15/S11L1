import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from "../action";

const initialState = {
    company: [],
};

const favoriteListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      return {
        ...state,
          company: state.company.concat(action.payload),
      };

    case REMOVE_FROM_FAVORITE:
      return {
          ...state,
          company: state.company.filter((company, i) => {
            return action.payload !== i;
          }),
      };

    default:
      return state;
  }
};

export default favoriteListReducer;
