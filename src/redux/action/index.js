export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
export const REMOVE_FROM_FAVORITE = "REMOVE_FROM_FAVORITE";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_FAILED = "FETCH_FAILED";
const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

export const addToFavorite = (jobData) => {
  return {
    type: ADD_TO_FAVORITE,
    payload: jobData,
  };
};

export const removeFromFavorite = (i) => {
  return {
    type: REMOVE_FROM_FAVORITE,
    payload: i,
  };
};

export const getSearchResult = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: FETCH_SUCCESS,
          payload: data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      dispatch({
        type: FETCH_FAILED,
        payload: error,
      });
    }
  };
};
