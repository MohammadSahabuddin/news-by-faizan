import { combineReducers } from "redux";
import NavigationData from "data/NavigationData";
import HeadlineData from "data/HeadlineData";
import * as actionTypes from "../types/actionType";

const navigationReducer = (navigationState = NavigationData, action) => {
    switch (action.type) {
        default:
            return navigationState;
    }
};
const headlineReducer = (headlineState = HeadlineData, action) => {
    switch (action.type) {
        default:
            return headlineState;
    }
};
const popularReducer = (popularNewsState = { popularNews: [] }, action) => {
    switch (action.type) {
        case actionTypes.POPULAR_SUCCESS:
            return {
                popularNews: action.payload.popularNews
            }

        case actionTypes.POPULAR_FAILED:
            return {
                error: action.payload
            }

        case actionTypes.CLEAR_ERRORS:
            return {
                ...popularNewsState,
                error: null
            }

        default:
            return popularNewsState;
    }
};
const todayReducer = (todayNewsState = { todayNews: [] }, action) => {
    switch (action.type) {
        case actionTypes.TODAY_SUCCESS:
            return {
                todayNews: action.payload.todayNews
            }

        case actionTypes.POPULAR_FAILED:
            return {
                error: action.payload
            }

        case actionTypes.CLEAR_ERRORS:
            return {
                error: null
            }

        default:
            return todayNewsState;
    }
};

const reducer = combineReducers({
    navigation: navigationReducer,
    headline: headlineReducer,
    popularNews: popularReducer,
    today: todayReducer,

})

export default reducer;