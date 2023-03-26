const initialState = {
  isDefaultshown: false,
};
const DefaultUIRdc = (state = initialState, action) => {
  switch (action.type) {
    case "DEFAULT_UI":
      return {
        ...state,
        isDefaultshown: true,
      };
    default:
      return state;
  }
};
export default DefaultUIRdc;
