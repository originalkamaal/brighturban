import { all } from 'redux-saga/effects'
import userSaga from './userSaga'
import singlelisting from './singlelisting'

export default function* rootSaga() {
  yield all([
    userSaga(), singlelisting()
  ])
}