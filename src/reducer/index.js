import { combineReducers } from 'redux';
import homeTabReducer from "./homeTab/homeTab.reducer";

const rootReducer = combineReducers({
    homeTab: homeTabReducer,
});

export default rootReducer;