import { SET_USER_INFO, SET_USER_REPOS } from "./actionsConstants";
import { TAction } from "../types";

const defaultUserInfo = {
  userInfo: {
    userName: "",
    userNickName: "",
    userURL: "",
    userAvatarURL: "",
    userFolowing: null,
    userFolowers: null,
    publicRepos: null,
  },
  userRepos: [],
};

export const userInfoReducer = (state = defaultUserInfo, action: TAction) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    case SET_USER_REPOS:
      return {
        ...state,
        userRepos: action.payload,
      };
    default:
      return state;
  }
};
