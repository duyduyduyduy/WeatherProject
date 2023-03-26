import { combineReducers, createStore, applyMiddleware } from "redux";
import MiddleReSa from "./Saga/MiddleReSa";
import reduxSaga from "redux-saga";
import cityReducer from "./Reducer/CityReducer";
import ContentReducer from "./Reducer/ContentReducer";
import DefaultUIRdc from "./Reducer/DefaultUIRdc";
const middleware = reduxSaga();
const allReducer = combineReducers({
  cityState: cityReducer,
  contentState: ContentReducer,
  defaultState: DefaultUIRdc,
});
export default createStore(allReducer, applyMiddleware(middleware));
//Run redux-saga luôn nằm dưới "applyMiddleWare"
middleware.run(MiddleReSa);
