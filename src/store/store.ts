import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {UserReducer} from './reducers/user-reducer';

const reducers = combineReducers({
    user: UserReducer
})

export const store = createStore(reducers, applyMiddleware(thunk));
export type AppStateType = ReturnType<typeof reducers>;