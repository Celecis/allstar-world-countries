import FETCH_API from "../../utils/fetchAPI.utils";

const INITIAL_STATE = {
  countries: FETCH_API,
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_COUNTRY":
      return {
        ...state,
        currentCountry: action.payload,
      };
    default:
      return state;
  }
};

export default directoryReducer;
