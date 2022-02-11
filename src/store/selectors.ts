import { TState } from "types";

export const selectorLoadingUserInfo = (state: TState) =>
  state.searchState.isLoadingUserInfo;

export const selectorsLoadingUserRepos = (state: TState) =>
  state.searchState.isLoadingUserRepos;

export const selectorsUserName = (state: TState) =>
  state.userData.userInfo.userNickName;

export const selectorsNumberOfRepositories = (state: TState) =>
  state.userData.userInfo.publicRepos;

export const selectorsUserNotFound = (state: TState) =>
  state.searchState.isUserNotFound;

export const selectorsUserData = (state: TState) => state.userData;
