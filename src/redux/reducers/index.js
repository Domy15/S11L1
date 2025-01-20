const initialState = {
  favorite: {
    company: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorite: {
          company: state.favorite.company.concat(action.payload),
        },
      };

    case "REMOVE_FROM_FAVORITE":
      return {
        ...state,
        favorite: {
          ...state.favorite,
          company: state.favorite.company.filter((company, i) => {
            return action.payload !== i;
          }),
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
