import { takeLatest, take, put, call, select } from 'redux-saga/effects';
import {
  GET_COMPLETE_NOVEL,
  GET_HOT_LIST_NOVEL,
  GET_LASTEST_RELEASE_NOVELS,
  GET_LASTEST_RELEASE_NOVELS_FAIL,
  GET_LASTEST_RELEASE_NOVELS_SUCCESS,
  GET_NEW_NOVEL,
  GET_POPULAR_NOVELS,
  GET_POPULAR_NOVELS_FAIL,
  GET_POPULAR_NOVELS_SUCCESS,
} from '../../action/homeTab/homeTab.action';
import {
  getCompletedNovels,
  getHotestNovels,
  getLastestReleaseNovels,
  getNewestNovels,
  getPopularNovels,
} from '../../service/api/novel.api';

function* getNewestNovelsSaga({ value }) {
    // yield put({type: START_LOADING_TABLE_DATA});
    try {
        const response = yield call(getLastestReleaseNovels);
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
        const response = yield call(getPopularNovels);
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

function* getNewNovel({ value }) {
  // yield put({type: START_LOADING_TABLE_DATA});
  try {
    yield put({
      type: GET_NEW_NOVEL.LOADING,
    });
    const response = yield call(getNewestNovels);
    if (response.status === 200) {
      const { success, data } =  response.data;
      if (success) {
        yield put({
          type: GET_NEW_NOVEL.SUCCESS,
          value: data.slice(0, 10),
        });
      } else {
        yield put({
          type: GET_NEW_NOVEL.FAILED,
          value: []
        });
      }
    } else {
      console.log('API error');
      yield put({
        type: GET_NEW_NOVEL.FAILED,
        value: []
      });
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: GET_NEW_NOVEL.FAILED,
      value: error
    });
  }

  // yield put({type: STOP_LOADING_TABLE_DATA});
}


function* getCompletedNovel({ value }) {
  // yield put({type: START_LOADING_TABLE_DATA});
  try {
    yield put({
      type: GET_COMPLETE_NOVEL.LOADING,
    });
    const response = yield call(getCompletedNovels);
    if (response.status === 200) {
      const { success, data } = response.data;
      console.log('API success');
      if (success) {
        yield put({
          type: GET_COMPLETE_NOVEL.SUCCESS,
          value: data.slice(0, 10),
        });
      } else {
        yield put({
          type: GET_COMPLETE_NOVEL.FAILED,
          value: []
        });
      }
    } else {
      console.log('API error');
      yield put({
        type: GET_COMPLETE_NOVEL.FAILED,
        value: []
      });
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: GET_COMPLETE_NOVEL.FAILED,
      value: error
    });
  }
}

function* getHotListNovel({ value }) {
  // yield put({type: START_LOADING_TABLE_DATA});
  try {
    yield put({
      type: GET_HOT_LIST_NOVEL.LOADING,
    });
    const response = yield call(getHotestNovels);
    if (response.status === 200) {
      const { success, data } = response.data;
      if (success) {
        yield put({
          type: GET_HOT_LIST_NOVEL.SUCCESS,
          value: data.slice(0, 10),
        });
      } else {
        yield put({
          type: GET_HOT_LIST_NOVEL.FAILED,
          value: []
        });
      }
    } else {
      console.log('API error');
      yield put({
        type: GET_HOT_LIST_NOVEL.FAILED,
        value: []
      });
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: GET_HOT_LIST_NOVEL.FAILED,
      value: error
    });
  }
}

export const homeTabSaga = function* () {
    yield takeLatest(GET_LASTEST_RELEASE_NOVELS, getNewestNovelsSaga);
    yield takeLatest(GET_POPULAR_NOVELS, getPopularNovelsSaga);
    yield takeLatest(GET_NEW_NOVEL.ACTION, getNewNovel)
    yield takeLatest(GET_COMPLETE_NOVEL.ACTION, getCompletedNovel)
    yield takeLatest(GET_HOT_LIST_NOVEL.ACTION, getHotListNovel)
}
