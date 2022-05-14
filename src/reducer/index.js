import { combineReducers } from 'redux';
import homeTabReducer from "./homeTab/homeTab.reducer";
import seeAllReducer from "./seeAll/seeAll.reducer";
import historyReducer from "./history/history.reducer";

const rootReducer = combineReducers({
    homeTab: homeTabReducer,
    seeAll: seeAllReducer,
    history: historyReducer,
});

export default rootReducer;