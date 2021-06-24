import { put, takeEvery, all } from "redux-saga/effects";

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export function* fetchData() {
  yield delay(200);
  yield put({ type: "FAKE_REQUEST" });
}

function* watchFetchData() {
  yield takeEvery("FETCH_UNITS", fetchData);
}

function* ageChange(payload) {
  yield put({ type: "AgeChange", payload });
}

function* watchAgeChange() {
  yield takeEvery("AGE_CHANGE", ageChange);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([watchFetchData(), fetchData(), watchAgeChange()]);
}
