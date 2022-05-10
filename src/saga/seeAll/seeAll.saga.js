import { takeLatest, take, put, call, select } from 'redux-saga/effects';
import { 
    SEARCH_NOVELS,
    SEARCH_NOVELS_FAIL,
    SEARCH_NOVELS_SUCCESS,
    SELECT_GENRE,
    SELECT_TYPE,
    START_LOADING_NOVELS,
    STOP_LOADING_NOVELS,
} from "../../action/seeAll/seeAll.action";
import { searchNovels } from '../../service/api/novel.api';

function* searchNovelsSaga({ value }) {
    const state = yield select((state) => state.seeAll);
    const { selectedGenre, selectedType, isShowCompletedNovelOnly, page } = state;

    yield put({type: START_LOADING_NOVELS});

    try {
        const response = yield call(searchNovels, selectedGenre, selectedType, isShowCompletedNovelOnly, page);
        if (response.status === 200) {
            const { success, data } =  response.data;
            if (success) {
                console.log(data);
                yield put({
                    type: SEARCH_NOVELS_SUCCESS,
                    value: data,
                });
            } else {
                yield put({
                    type: SEARCH_NOVELS_FAIL,
                    value: []
                });
            }
        } else {
            console.log('API error');
            yield put({
                type: SEARCH_NOVELS_FAIL,
                value: []
            });
        }
    } catch (error) {
        console.log(error);
        yield put({
            type: SEARCH_NOVELS_FAIL,
            value: error
        });
    }

    yield put({type: STOP_LOADING_NOVELS});
}

export const seeAllSaga = function* () {
    yield takeLatest(SEARCH_NOVELS, searchNovelsSaga);
    yield takeLatest(SELECT_GENRE, searchNovelsSaga);
    yield takeLatest(SELECT_TYPE, searchNovelsSaga);
}