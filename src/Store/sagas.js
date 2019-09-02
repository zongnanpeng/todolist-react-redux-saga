import { takeEvery, put } from "@redux-saga/core/effects";
import { GET_LIST, GET_LIST_SUCCESS } from './actionTypes'
import Axios from "axios";

function* rootSaga() {
    yield takeEvery(GET_LIST, getList);
}

function* getList() {
    const response = yield Axios.get('https://www.easy-mock.com/mock/5d5cb265f39c7a20e25b9224/reactBasic/todolist')
    const value = response.data.data;
    const action = {
        type: GET_LIST_SUCCESS,
        value
    }
    yield put(action)
}

export default rootSaga;
