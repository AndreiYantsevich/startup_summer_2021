import {API, UsersType} from '../../api';
import {ThunkAction} from 'redux-thunk';
import {AppStateType} from '../store';
import {Dispatch} from 'redux';

const GET_USER = 'GET_USER'
const SEARCH_USER = 'SEARCH_USER'

const initialState = {
    searchedUser: '' as string,
    userProfile: null as null | UsersType
}

export const UserReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SEARCH_USER':
            return {...state, searchedUser: action.value}
        case 'GET_USER':
            return {...state, userProfile: action.userProfile}
        default:
            return {...state}
    }
}

export const searchUserAC = (value: string) => ({type: SEARCH_USER, value} as const)
export const getUserAC = (userProfile: UsersType | null) => ({
    type: GET_USER,
    userProfile
} as const)



export const fetchUser = (username: string): ThunkActionType =>  dispatch => {
    return API.getUser(username)
        .then(data => {
            dispatch(getUserAC(data.data))
        })
}

type ActionsType =
    | ReturnType<typeof getUserAC>
    | ReturnType<typeof searchUserAC>

export type InitialStateType = typeof initialState

type ThunkActionType = ThunkAction<Promise<void>, AppStateType, any, ActionsType>