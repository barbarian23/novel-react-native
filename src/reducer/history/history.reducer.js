import {
    ADD_CHAPTER,
    DELETE_ALL_CHAPTERS,
    GET_CHAPTERS_FAIL,
    GET_CHAPTERS_SUCCESS,
} from "../../action/history/history.action";

const initialState = {
    chapters: [] ,
    // [
    //     {
    //         novel_id: '',
    //         novel_name: '',
    //         totalChapter: 0,
    //         crawler_date: '',
    //         chapter_id: '',
    //         chapter_name: '',
    //     }
    // ]
};

export default function historyReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CHAPTERS_SUCCESS:
            console.log(action.value);
            return {
                ...state,
                chapters: action.value
            }
        case GET_CHAPTERS_FAIL:
            return {
                ...state,
                chapters: action.value
            }

        case ADD_CHAPTER:
            console.log(state.chapters);
            console.log(action.value);
            return {
                ...state,
                chapters: [
                    ...state.chapters,
                    action.value
                ]
            }
        case DELETE_ALL_CHAPTERS:
            return {
                ...state,
                chapters: [],
            }
        default:
            return {
                ...state
            }
    }
}