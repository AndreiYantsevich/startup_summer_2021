import {API, UsersType} from '../../api';
import {ThunkAction} from 'redux-thunk';
import {AppStateType} from '../store';

const GET_USER = 'GET_USER'
const SEARCH_USER = 'SEARCH_USER'

const initialState = {
    searchedUser: '' as string,
    userProfile: null as null | UsersType
}

export const UserReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'GET_USER':
            return {...state, userProfile: action.userProfile}
        case 'SEARCH_USER':
            return {...state, searchedUser: action.value}
        default:
            return {...state}
    }
}

export const getUserAC = (userProfile: UsersType | null) => ({
    type: GET_USER,
    userProfile
} as const)
export const searchUserAC = (value: string) => ({type: SEARCH_USER, value} as const)

export const fetchUser = (username: string): ThunkActionType => async (dispatch) => {
    try {
        const data = await API.getUser(username)
        dispatch(getUserAC(data))
    } catch (e) {
        dispatch(getUserAC(null))
    }
}

type ActionsType =
    | ReturnType<typeof getUserAC>
    | ReturnType<typeof searchUserAC>

export type InitialStateType = typeof initialState

type ThunkActionType = ThunkAction<Promise<void>, AppStateType, any, ActionsType>