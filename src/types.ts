export type TSearchInfo = {
  isError: boolean;
  isUserNotFound: boolean;
  isLoadingUserInfo: boolean;
  isLoadingUserRepos: boolean;
};

export type TAction = { type: string; payload: unknown };

export type TUserInfo = {
  userName: string;
  userNickName: string;
  userURL: string;
  userAvatarURL: string;
  userFolowing: number | null;
  userFolowers: number | null;
  publicRepos: number | null;
};

export type TUserRepo = {
  name: string;
  html_url: string;
  repoUrl: string;
  description: string;
};

export type TUserReposArray = [TUserRepo];

export type TState = {
  searchState: TSearchInfo;
  userData: { userInfo: TUserInfo; userRepos: TUserReposArray };
};
