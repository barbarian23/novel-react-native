import {
  call,
  put,
  select,
  takeLatest,
} from 'redux-saga/effects';
import {
  getNovelInfo,
  getNovelChapter,
  getChapterContent,
} from '../../service/api/novel.api';
import {
  GET_CHAPTER_CONTENT,
  GET_NOVEL_CHAPTER,
  GET_NOVEL_INFO,
} from '../../action/homeTab/detail.action';

function* getNovelInformation({ value }) {
  try {
    yield put({
      type: GET_NOVEL_INFO.LOADING,
    });
    const response = yield call(getNovelInfo, value);
    if (response.status === 200) {
      const { success, data } = response.data;
      if (success) {
        console.log('source', data);
        yield put({
          type: GET_NOVEL_INFO.SUCCESS,
          value: data
        });
      } else {
        yield put({
          type: GET_NOVEL_INFO.FAILED,
          value: null,
        });
      }
    } else {
      console.log('API error');
      yield put({
        type: GET_NOVEL_INFO.FAILED,
        value: null,
      });
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: GET_NOVEL_INFO.FAILED,
      value: error,
    });
  }
}

function* getNovelChapterList({ value }) {
  console.log('value::', value);
  try {
    yield put({
      type: GET_NOVEL_CHAPTER.LOADING,
    });
    const response = yield call(getNovelChapter, value);
    if (response.status === 200) {
      const { success, data } = response.data;
      if (success) {
        console.log('source', data);
        yield put({
          type: GET_NOVEL_CHAPTER.SUCCESS,
          value: data
        });
      } else {
        yield put({
          type: GET_NOVEL_CHAPTER.FAILED,
          value: null,
        });
      }
    } else {
      console.log('API error');
      yield put({
        type: GET_NOVEL_CHAPTER.FAILED,
        value: null,
      });
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: GET_NOVEL_CHAPTER.FAILED,
      value: error,
    });
  }
}

function* getNovelChapterContent({ novel_id, chapter_id }) {
  console.log('value::', novel_id, chapter_id);
  try {
    yield put({
      type: GET_CHAPTER_CONTENT.LOADING,
    });
    const response = yield call(getChapterContent, novel_id, chapter_id);
    if (response.status === 200) {
      const { success, data } = response.data;
      if (success) {
        console.log('source', data);
        yield put({
          type: GET_CHAPTER_CONTENT.SUCCESS,
          value: data
        });
      } else {
        yield put({
          type: GET_CHAPTER_CONTENT.FAILED,
          value: null,
        });
      }
    } else {
      console.log('API error');
      yield put({
        type: GET_CHAPTER_CONTENT.FAILED,
        value: null,
      });
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: GET_NOVEL_CHAPTER.FAILED,
      value: error,
    });
  }
}

export const detailSaga = function* () {
  yield takeLatest(GET_NOVEL_INFO.ACTION, getNovelInformation);
  yield takeLatest(GET_NOVEL_CHAPTER.ACTION, getNovelChapterList)
  yield takeLatest(GET_CHAPTER_CONTENT.ACTION, getNovelChapterContent)
};
