const initialState = {
  details: {},
};

const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DETAILS":
      return {
        ...state,
        details: action.payload,
      };
    case "EDIT_DETAILS":
      return {
        ...state,
        details: action.payload,
      };
    default:
      return state;
  }
};

export default detailsReducer;
