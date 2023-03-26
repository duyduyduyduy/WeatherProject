import { takeEvery, delay, put, takeLatest, call } from "redux-saga/effects";
const fetchDataFromCityAPI = async (keyCity) => {
  let res = await fetch(
    `https://openweathermap.org/data/2.5/find?q=${keyCity}&appid=439d4b804bc8187953eb36d2a8c26a02`
  );
  let data = await res.json();
  return {
    status: data.cod,
    data: data.list,
  };
};
const fetchDataFromContentAPI = async (lat, lon) => {
  let res = await fetch(
    `https://openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=439d4b804bc8187953eb36d2a8c26a02`
  );
  let data = await res.json();
  return data;
};

function* getdata(action) {
  yield put({
    type: "READY_PHASE_OF_FECTH_CITY",
  });
  let Info = yield call(fetchDataFromCityAPI, action.payload);
  if (Info.status === "200") {
    yield put({
      type: "GET_DATA_FROM_CITY_API",
      payload: Info.data,
    });
    yield put({
      type: "SUCCESS_PHASE_OF_FECTH_CITY",
    });
  } else {
    yield put({
      type: "FAILED_PHASE_OF_FECTH_CITY",
    });
  }
}
function* getdatafromsecondapi(action) {
  yield put({
    type: "READY_PHASE_OF_FECTH_CONTENT",
  });
  let Info = yield call(
    fetchDataFromContentAPI,
    action.payload.lat,
    action.payload.lon
  );
  if (Info) {
    yield put({
      type: "SUCCESS_PHASE_OF_FECTH_CONTENT",
    });
    yield put({
      type: "GET_DATA_FROM_SECOND_API",
      payload: Info,
    });
  }
}
function* mySaga() {
  yield takeEvery("FETCH_DATA_FROM_CITY_API", getdata);
  yield takeEvery("FETCH_DATA_FROM_CONTENT_API", getdatafromsecondapi);
}
export default mySaga;
