import {
  GET_LASTEST_RELEASE_NOVELS,
  GET_LASTEST_RELEASE_NOVELS_FAIL,
  GET_LASTEST_RELEASE_NOVELS_SUCCESS,
  GET_POPULAR_NOVELS,
  GET_POPULAR_NOVELS_SUCCESS,
  SEARCH_KEYWORD_CHANGE,
  GET_NEW_NOVEL,
  GET_COMPLETE_NOVEL,
  GET_HOT_LIST_NOVEL,
} from '../../action/homeTab/homeTab.action';

const initialState = {
  lastestReleaseNovels: [],
  isLoadingLastestReleaseNovels: false,

  popularNovels: [],
  isLoadingPopularNovels: false,

  keyword: '',

  isLoadingNewNovels: false,
  newNovels: [],

  isLoadingCompleteNovels: false,
  completedNovels: [],

  isLoadingHotListNovels: false,
  hotListNovels: [],
};

export default function homeTabReducer(state = initialState, action) {
  switch (action.type) {
    case GET_HOT_LIST_NOVEL.LOADING: {
      return {
        ...state,
        isLoadingHotListNovels: true,
        hotListNovels: [],
      };
    }
    case GET_HOT_LIST_NOVEL.SUCCESS: {
      return {
        ...state,
        isLoadingHotListNovels: false,
        hotListNovels: action.value,
      };
    }
    case GET_HOT_LIST_NOVEL.FAILED: {
      return {
        ...state,
        isLoadingHotListNovels: false,
        hotListNovels: [],
      };
    }
    case GET_COMPLETE_NOVEL.LOADING: {
      return {
        ...state,
        isLoadingCompleteNovels: true,
        completedNovels: [],
      };
    }
    case GET_COMPLETE_NOVEL.SUCCESS: {
      return {
        ...state,
        isLoadingCompleteNovels: false,
        completedNovels: action.value,
      };
    }
    case GET_COMPLETE_NOVEL.FAILED: {
      return {
        ...state,
        isLoadingCompleteNovels: false,
        completedNovels: [],
      };
    }
    case GET_NEW_NOVEL.LOADING:
      return {
        ...state,
        isLoadingNewNovels: true,
      };
    case GET_NEW_NOVEL.SUCCESS: {
      return {
        ...state,
        newNovels: action.value,
      };
    }
    case GET_NEW_NOVEL.FAILED: {
      return {
        ...state,
        newNovels: [],
      };
    }
    case SEARCH_KEYWORD_CHANGE:
      return {
        ...state,
        keyword: action.value,
      };
    case GET_LASTEST_RELEASE_NOVELS:
      return {
        ...state,
        isLoadingLastestReleaseNovels: true,
      };
    case GET_LASTEST_RELEASE_NOVELS_SUCCESS:
      return {
        ...state,
        lastestReleaseNovels: action.value,
        isLoadingLastestReleaseNovels: false,
      };
    case GET_LASTEST_RELEASE_NOVELS_FAIL:
      return {
        ...state,
        lastestReleaseNovels: [],
        isLoadingLastestReleaseNovels: false,
      };

    case GET_POPULAR_NOVELS:
      return {
        ...state,
        isLoadingPopularNovels: true,
      };
    case GET_POPULAR_NOVELS_SUCCESS:
      return {
        ...state,
        popularNovels: action.value,
        isLoadingPopularNovels: false,
      };
    case GET_LASTEST_RELEASE_NOVELS_FAIL:
      return {
        ...state,
        popularNovels: [],
        isLoadingPopularNovels: false,
      };
    default:
      return {
        ...state,
      };
  }
}
