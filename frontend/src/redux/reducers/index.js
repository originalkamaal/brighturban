
import { persistCombineReducers } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import users from './users';

const rootReducer = persistCombineReducers(
  {
      key: 'rrsb',
      stateReconciler: autoMergeLevel2,
      storage,
      blacklist: ['alerts'],
      timeout: 0,
  },
  {users},
);

export default rootReducer;