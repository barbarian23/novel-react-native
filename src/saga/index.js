import { select, take, all } from 'redux-saga/effects';
import { homeTabSaga } from './homeTab/homeTab.saga'
import { seeAllSaga } from './seeAll/seeAll.saga'
import { historySaga } from './history/history.saga'

const rootSaga = function* () {
    yield all([
        homeTabSaga(),
        seeAllSaga(),
        historySaga(),
    ]);
}

export default rootSaga;