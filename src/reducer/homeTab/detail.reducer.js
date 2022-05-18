import {
  GET_CHAPTER_CONTENT,
  GET_NOVEL_CHAPTER,
  GET_NOVEL_INFO,
} from '../../action/homeTab/detail.action';

const initState = {
  info: {
    data: null,
    loading: false,
  },
  chapter: {
    data: [],
    loading: false,
  },
  chapterContent: {
    data: null,
    loading: false,
  },
};

export default function detailReducer(state = initState, action) {
  switch (action.type) {
    case GET_CHAPTER_CONTENT.LOADING: {
      return {
        ...state,
        chapterContent: {
          loading: true,
          data: null,
        },
      };
    }
    case GET_CHAPTER_CONTENT.SUCCESS: {
      return {
        ...state,
        chapterContent: {
          loading: false,
          data: action.value,
        },
      };
    }
    case GET_CHAPTER_CONTENT.FAILED: {
      return {
        ...state,
        chapterContent: {
          loading: false,
          data: null,
        },
      };
    }
    case GET_NOVEL_CHAPTER.LOADING: {
      return {
        ...state,
        chapter: {
          loading: true,
          data: [],
        },
      };
    }
    case GET_NOVEL_CHAPTER.SUCCESS: {
      return {
        ...state,
        chapter: {
          data: action.value,
          loading: false,
        },
      };
    }
    case GET_NOVEL_CHAPTER.FAILED: {
      return {
        ...state,
        chapter: {
          data: [],
          loading: false,
        },
      };
    }
    case GET_NOVEL_INFO.LOADING: {
      return {
        ...state,
        info: {
          loading: true,
          data: null,
        },
      };
    }
    case GET_NOVEL_INFO.SUCCESS: {
      return {
        ...state,
        info: {
          loading: false,
          data: action.value,
        },
      };
    }
    case GET_NOVEL_INFO.FAILED: {
      return {
        ...state,
        info: {
          loading: false,
          data: null,
        },
      };
    }
    default:
      return state;
  }
}
