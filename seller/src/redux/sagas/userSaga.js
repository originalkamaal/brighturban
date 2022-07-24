import { call, put, takeEvery } from 'redux-saga/effects'
import { getApi } from '../services/userService';
import { GET_USERS_FAILED, GET_USERS_REQUESTED, GET_USERS_SUCCESS } from '../types'


function* fetchUsers(action) {
   try {
      const users = yield call(getApi);
      yield put({ type: GET_USERS_SUCCESS, users: users });
   } catch (e) {
      yield put({ type: GET_USERS_FAILED, message: e.message });
   }
}

function* userSaga() {
   yield takeEvery(GET_USERS_REQUESTED, fetchUsers);
}

export default userSaga;