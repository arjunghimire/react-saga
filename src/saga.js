import axios from "axios";
import { takeEvery, call, put } from "redux-saga/effects";

class Api {
  axiosFunction = () => {
    return axios.create({
      baseURL: "https://reqres.in/api/",
      responseType: "json",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  };
  post = async (data) => {
    let self = this;
    return new Promise(function (resolve, reject) {
      self
        .axiosFunction()
        .post("login", data)
        .then(
          (response) => {
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        );
    });
  };
}
const api = new Api();
function* requestLogin({ payload }) {
  try {
    const response = yield call(api.post, payload);
    yield put({ type: "login_success", user: response.data });
  } catch (e) {
    yield put({ type: "login_failed" });
  }
}

export function* mySaga() {
  yield takeEvery("login_request", requestLogin);
}
