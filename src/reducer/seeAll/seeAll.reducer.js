import {
    SHOW_COMPLETED_NOVELS_ONLY,
    HIDE_COMPLETED_NOVELS_ONLY,
    SELECT_GENRE,
    SELECT_TYPE,
    START_LOADING_NOVELS,
    STOP_LOADING_NOVELS,
    SEARCH_NOVELS,
    SEARCH_NOVELS_SUCCESS,
    SEARCH_NOVELS_FAIL,
    TOGGLE_COMPLETED_NOVELS_ONLY,
    START_LOADING_APPEND_NOVELS,
    STOP_LOADING_APPEND_NOVELS,
    SEARCH_APPEND_NOVELS,
    SEARCH_APPEND_NOVELS_FAIL,
    SEARCH_APPEND_NOVELS_SUCCESS,
} from "../../action/seeAll/seeAll.action";

const initialState = {
    isShowCompletedNovelOnly: false,

    genres: ['All', 'Tragedy', 'Fantasy', 'Shounen Ai', 'Josei', 'Historical', 'Horror', 'Action', 'Adult', 'Adventure', 'Ai', 'Bender', 'Chinese', 'Comedy', 'Drama', 'Ecchi', 'Game', 'Gender', 'Harem'],
    selectedGenre: 'All',
    types: ['Popular', 'New', 'Hot', 'Chapters'],
    selectedType: 'Popular',
    page: 1,

    isLoadingNovels: false,
    isLoadingAppendNovels: false,

    novels: [],
};

export default function seeAllReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_COMPLETED_NOVELS_ONLY:
            return {
                ...state,
                isShowCompletedNovelOnly: true
            }
        case HIDE_COMPLETED_NOVELS_ONLY:
            return {
                ...state,
                isShowCompletedNovelOnly: false
            }
        case TOGGLE_COMPLETED_NOVELS_ONLY:
            return {
                ...state,
                isShowCompletedNovelOnly: !state.isShowCompletedNovelOnly,
            }
        case SELECT_GENRE:
            return {
                ...state,
                selectedGenre: action.value,
                novels: [],
                page: 1,
            }
        case SELECT_TYPE:
            return {
                ...state,
                selectedType: action.value,
                novels: [],
                page: 1,
            }

        case START_LOADING_NOVELS:
            return {
                ...state,
                isLoadingNovels: true,
            }

        case STOP_LOADING_NOVELS:
            return {
                ...state,
                isLoadingNovels: false,
            }

        case SEARCH_NOVELS:
            return {
                ...state,
                page: 1,
            }

        case SEARCH_NOVELS_FAIL:
            return {
                ...state,
                novels: [],
            }
        case SEARCH_NOVELS_SUCCESS:
            return {
                ...state,
                novels: action.value,
            }

        case START_LOADING_APPEND_NOVELS:
            return {
                ...state,
                isLoadingAppendNovels: true,
            }

        case STOP_LOADING_APPEND_NOVELS:
            return {
                ...state,
                isLoadingAppendNovels: false,
            }

        case SEARCH_APPEND_NOVELS:
            return {
                ...state,
                page: state.page + 1
            }
        case SEARCH_APPEND_NOVELS_FAIL:
            return {
                ...state,
                // novels: [],
            }
        case SEARCH_APPEND_NOVELS_SUCCESS:
            return {
                ...state,
                novels: state.novels.concat(action.value),
            }

        default:
            return {
                ...state
            }
    }
}