import {
    GET_LASTEST_RELEASE_NOVELS,
    GET_LASTEST_RELEASE_NOVELS_FAIL,
    GET_LASTEST_RELEASE_NOVELS_SUCCESS,
    GET_POPULAR_NOVELS,
    GET_POPULAR_NOVELS_SUCCESS,
    SEARCH_KEYWORD_CHANGE,
} from "../../action/homeTab/homeTab.action";

const initialState = {
    lastestReleaseNovels: [],
    isLoadingLastestReleaseNovels: false,

    popularNovels: [],
    isLoadingPopularNovels: false,

    keyword: '',
};

export default function homeTabReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_KEYWORD_CHANGE:
            return {
                ...state,
                keyword: action.value
            }
        case GET_LASTEST_RELEASE_NOVELS:
            return {
                ...state,
                isLoadingLastestReleaseNovels: true,
            }
        case GET_LASTEST_RELEASE_NOVELS_SUCCESS:
            return {
                ...state,
                lastestReleaseNovels: action.value,
                isLoadingLastestReleaseNovels: false,
            }
        case GET_LASTEST_RELEASE_NOVELS_FAIL:
            return {
                ...state,
                lastestReleaseNovels: [],
                isLoadingLastestReleaseNovels: false,
            }

        case GET_POPULAR_NOVELS:
            return {
                ...state,
                isLoadingPopularNovels: true,
            }
        case GET_POPULAR_NOVELS_SUCCESS:
            return {
                ...state,
                popularNovels: action.value,
                isLoadingPopularNovels: false,
            }
        case GET_LASTEST_RELEASE_NOVELS_FAIL:
            return {
                ...state,
                popularNovels: [],
                isLoadingPopularNovels: false,
            }
        default:
            return {
                ...state
            }
    }
}