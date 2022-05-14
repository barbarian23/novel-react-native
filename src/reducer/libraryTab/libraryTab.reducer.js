import {
    GET_RECOMMEND_NOVELS,
    GET_RECOMMEND_NOVELS_FAIL,
    GET_RECOMMEND_NOVELS_SUCCESS,
    SEARCH_KEYWORD_CHANGE,
} from "../../action/libraryTab/libraryTab.action";

const initialState = {
    recommendNovels: [],
    isLoadingRecommendNovels: false,

    keyword: '',
};

export default function homeTabReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_KEYWORD_CHANGE:
            return {
                ...state,
                keyword: action.value
            }
        case GET_RECOMMEND_NOVELS:
            return {
                ...state,
                isLoadingRecommendNovels: true,
            }
        case GET_RECOMMEND_NOVELS_SUCCESS:
            return {
                ...state,
                recommendNovels: action.value,
                isLoadingRecommendNovels: false,
            }
        case GET_RECOMMEND_NOVELS_FAIL:
            return {
                ...state,
                recommendNovels: [],
                isLoadingRecommendNovels: false,
            }
            
        default:
            return {
                ...state
            }
    }
}