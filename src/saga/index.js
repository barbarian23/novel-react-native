import { select, take, all } from 'redux-saga/effects';
import { homeTabSaga } from './homeTab/homeTab.saga'
import { seeAllSaga } from './seeAll/seeAll.saga'

const rootSaga = function* () {
    yield all([
        homeTabSaga(),
        seeAllSaga(),
    ]);
}

export default rootSaga;