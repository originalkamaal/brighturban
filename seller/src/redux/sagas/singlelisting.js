import { call, put, takeEvery } from 'redux-saga/effects'
import { getAllCats } from '../services/singlelistingService'
import { GET_ALL_CATS_SUCCESS, GET_ALL_CATS_FAILED, GET_ALL_CATS } from '../types';

function* fetchAllCats(action) {
    try {
        const catagories = yield call(getAllCats);
        yield put({ GET_ALL_CATS_SUCCESS, payload: catagories });
    } catch (e) {
        yield put({ GET_ALL_CATS_FAILED, message: e.message });
    }
}

function* userSaga() {
    yield takeEvery(GET_ALL_CATS, fetchAllCats);
}

export default userSaga;