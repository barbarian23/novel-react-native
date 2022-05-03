import { combineReducers } from 'redux';
import homeTabReducer from "./homeTab/homeTab.reducer";
import seeAllReducer from "./seeAll/seeAll.reducer";

const rootReducer = combineReducers({
    homeTab: homeTabReducer,
    seeAll: seeAllReducer,
});

export default rootReducer;