import { takeLatest, take, put, call, select } from 'redux-saga/effects';
import { 
    GET_LASTEST_RELEASE_NOVELS,
    GET_LASTEST_RELEASE_NOVELS_FAIL,
    GET_LASTEST_RELEASE_NOVELS_SUCCESS,
    GET_POPULAR_NOVELS,
    GET_POPULAR_NOVELS_FAIL,
    GET_POPULAR_NOVELS_SUCCESS,
} from "../../action/homeTab/homeTab.action";
import { getNewestNovels, getHotestNovels } from '../../service/api/novel.api';

function* getNewestNovelsSaga({ value }) {
    // yield put({type: START_LOADING_TABLE_DATA});
    try {
        const response = yield call(getNewestNovels);
        if (response.status === 200) {
            const { success, data } =  response.data;
            if (success) {
                yield put({
                    type: GET_LASTEST_RELEASE_NOVELS_SUCCESS,
                    value: data.slice(0, 3),
                });
            } else {
                yield put({
                    type: GET_LASTEST_RELEASE_NOVELS_FAIL,
                    value: []
                });
            }
        } else {
            console.log('API error');
            yield put({
                type: GET_LASTEST_RELEASE_NOVELS_FAIL,
                value: []
            });
        }
    } catch (error) {
        console.log(error);
        yield put({
            type: GET_LASTEST_RELEASE_NOVELS_FAIL,
            value: error
        });
    }

    // yield put({type: STOP_LOADING_TABLE_DATA});
}

function* getPopularNovelsSaga({ value }) {
    // yield put({type: START_LOADING_TABLE_DATA});
    try {
        const response = yield call(getHotestNovels);
        if (response.status === 200) {
            const { success, data } =  response.data;
            if (success) {
                yield put({
                    type: GET_POPULAR_NOVELS_SUCCESS,
                    value: data.slice(0, 3),
                });
            } else {
                yield put({
                    type: GET_POPULAR_NOVELS_FAIL,
                    value: []
                });
            }
        } else {
            console.log('API error');
            yield put({
                type: GET_POPULAR_NOVELS_FAIL,
                value: []
            });
        }
    } catch (error) {
        console.log(error);
        yield put({
            type: GET_POPULAR_NOVELS_FAIL,
            value: error
        });
    }

    // yield put({type: STOP_LOADING_TABLE_DATA});
}

export const homeTabSaga = function* () {
    yield takeLatest(GET_LASTEST_RELEASE_NOVELS, getNewestNovelsSaga);
    yield takeLatest(GET_POPULAR_NOVELS, getPopularNovelsSaga);
}