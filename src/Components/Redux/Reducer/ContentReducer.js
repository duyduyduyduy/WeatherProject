import handleTimeAll from "../../FunctionHandle/HandleTimeAll";
const initialState = {
  contentCity: undefined,
  isReadyContent: "",
  isSuccessContent: "",
  isFailedContent: "",
  isOpenModal: "",
};
const ContentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA_FROM_SECOND_API":
      return {
        ...state,
        contentCity: {
          name: action.payload.timezone,
          currentTemp: action.payload.current.temp + "°C",
          currentStatus: action.payload.current.weather[0].main,
          todayInfo: {
            "Felt Temp": action.payload.current.temp + " °C",
            Humidity: action.payload.current.humidity + "%",
            Wind: action.payload.current.wind_speed + "m/s",
            Visibility: 10000 + "km",
            "Max Temp": action.payload.current.temp + " °C",
            "Min Temp": action.payload.current.temp + " °C",
          },
          lsDayForeCast: action.payload.daily.map((item) => {
            return {
              imgSrc: item.weather[0].icon,
              Date: handleTimeAll(item.dt * 1000),
              tmp: item.temp.day + "°C",
              detail: {
                "Felt Temp": item.temp.day + " °C",
                Humidity: item.humidity + "%",
                Wind: item.wind_speed + "m/s",
                Visibility: 10000 + "km",
                "Max Temp": item.temp.max + "°C",
                "Min Temp:": item.temp.min + "°C",
              },
            };
          }),
        },
      };
    case "READY_PHASE_OF_FECTH_CONTENT":
      return {
        ...state,
        isReadyContent: true,
        isSuccessContent: false,
        isFailedContent: false,
      };
    case "SUCCESS_PHASE_OF_FECTH_CONTENT":
      return {
        ...state,
        isReadyContent: false,
        isSuccessContent: true,
        isFailedContent: false,
      };
    case "FAILED_PHASE_OF_FECTH_CONTENT":
      return {
        ...state,
        isReadyContent: false,
        isSuccessContent: false,
        isFailedContent: true,
      };
    case "OPEN_MODAL":
      return {
        ...state,
        isOpenModal: true,
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        isOpenModal: false,
      };
    default:
      return state;
  }
};
export default ContentReducer;
