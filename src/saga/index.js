import { select, take, all } from 'redux-saga/effects';
import { homeTabSaga } from './homeTab/homeTab.saga'

const rootSaga = function* () {
    yield all([
        homeTabSaga(),
    ]);
}

export default rootSaga;