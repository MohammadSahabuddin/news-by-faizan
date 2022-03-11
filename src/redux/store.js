import {createStore, applyMiddleware} from "redux";
import {HYDRATE, createWrapper} from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import reducers from "./reducers/reducers";

const bindMiddleware = (middleware) => {
    return composeWithDevTools(applyMiddleware(...middleware))
}

const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload
        }
        return nextState
    } else {
        return reducers(state, action)
    }
}

const myStore = () => {
    return createStore(reducer, bindMiddleware([thunkMiddleware]))
}

export const wrapper = createWrapper(myStore);