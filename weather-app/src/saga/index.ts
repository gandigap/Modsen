import { all } from 'redux-saga/effects';

import { locationWatcher, weatherWatcher } from './watchers';

export default function* rootSaga() {
  yield all([locationWatcher(), weatherWatcher()]);
}
