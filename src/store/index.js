import {createStore, applyMiddleware} from 'redux';
import rootReducer from "../reducers";
import {createWrapper, HYDRATE} from "next-redux-wrapper";
import thunkMiddleware from 'redux-thunk'

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const {composeWithDevTools} = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const rootStore = createStore(rootReducer);

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    }
    // if (state.user) nextState.user = state.user // preserve count value on client side navigation
    return nextState
  } else {
    return rootReducer(state, action)
  }
}


const initStore = () => {
  return createStore(reducer, bindMiddleware([thunkMiddleware]))
}

export const wrapper = createWrapper(initStore);

export default rootStore;
