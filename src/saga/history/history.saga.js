import { takeLatest, take, put, call, select } from 'redux-saga/effects';
import {
    GET_CHAPTERS,
    GET_CHAPTERS_FAIL,
    GET_CHAPTERS_SUCCESS,
    ADD_CHAPTER,
    DELETE_ALL_CHAPTERS,
} from "../../action/history/history.action";
import { readFile, writeFile} from "../../service/fs/history.fs";

function* getChaptersSaga({ value }) {
    const filename = '/read_chapters.json';
    try {
        let result = yield call(readFile, filename, 'utf8');
        console.log('res', result)
        if (result) {
            yield put({
                type: GET_CHAPTERS_SUCCESS,
                value: JSON.parse(result),
            });
        } else {
            yield put({
                type: GET_CHAPTERS_FAIL,
                value: []
            });
        }
    } catch (error) {
        console.log(error);
        yield put({
            type: GET_CHAPTERS_FAIL,
            value: error
        });
    }
}

function* saveChaptersSaga({ value }) {
    const state = yield select((state) => state.history);
    const { chapters } = state;
    const filename = '/read_chapters.json';
    try {
        let result = yield call(writeFile, filename, JSON.stringify(chapters));
    } catch (error) {
        console.log('[ERR]', error);
    }
}

export const historySaga = function* () {
    yield takeLatest(GET_CHAPTERS, getChaptersSaga);
    yield takeLatest(ADD_CHAPTER, saveChaptersSaga);
    yield takeLatest(DELETE_ALL_CHAPTERS, saveChaptersSaga);
}