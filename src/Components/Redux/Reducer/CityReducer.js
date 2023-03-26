const initialState = {
  lsCity: [],
  isReady: "",
  isSuccess: "",
  isFailed: "",
};
const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA_FROM_CITY_API":
      return {
        ...state,
        lsCity: action.payload,
      };
    case "READY_PHASE_OF_FECTH_CITY":
      return {
        ...state,
        isReady: true,
        isSuccess: false,
        isFailed: false,
      };
    case "SUCCESS_PHASE_OF_FECTH_CITY":
      return {
        ...state,
        isReady: false,
        isSuccess: true,
        isFailed: false,
      };
    case "FAILED_PHASE_OF_FECTH_CITY":
      return {
        ...state,
        isReady: false,
        isSuccess: false,
        isFailed: true,
      };
    default:
      return state;
  }
};
export default cityReducer;
