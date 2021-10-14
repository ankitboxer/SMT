import {
    GET_SUB_APP_REQUEST,
    GET_SUB_APP_SUCCESS,
    GET_SUB_APP_FAILED
} from '../actions/action_types.js';
import { takeLatest, call, put, takeEvery} from 'redux-saga/effects';

export function fetchPostsApi() {
    return fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
  }

function* fetchSubApp(action) {
    try {
        console.log('saga called');
        const subAppData = yield call(fetchPostsApi);
        console.log('saga called 2');
        console.log(subAppData);
        yield put({ type: GET_SUB_APP_SUCCESS, subApp: subAppData });
    } catch (error) {
        yield put({ type: GET_SUB_APP_FAILED, message: error.message });
    }
}

function* applicationDataSaga() {
    yield takeEvery(GET_SUB_APP_REQUEST, fetchSubApp)
}

export default applicationDataSaga;