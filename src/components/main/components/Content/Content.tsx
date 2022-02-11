import React, { FC } from "react";
import { Box, CardMedia, Typography } from "@material-ui/core";
import USER_NOT_FOUND from "assets/img/userNotFound.svg";
import { TUserInfo, TUserReposArray } from "types";
import { StartPage, UserContent } from "./components";
import { useStyles } from "./styled";

type ContentProps = {
  userData: { userInfo: TUserInfo; userRepos: TUserReposArray };
  isStartPage: boolean;
  numberOfReposPage: number;
  paginateCurrentPage: number;
  handlePageClick: (data: { selected: number }) => void;
  paginateInfoObj: { firstPage: number; lastPage: number; allRepos: number };
  isLoadingUserRepos: boolean;
  isUserNotFound: boolean;
};

export const Content: FC<ContentProps> = ({
  userData,
  isStartPage,
  numberOfReposPage,
  paginateCurrentPage,
  handlePageClick,
  paginateInfoObj,
  isLoadingUserRepos,
  isUserNotFound,
}) => {
  const classes = useStyles();

  return (
    <>
      {isUserNotFound && (
        <>
          <Box className={classes.wrapperNotFoundPage}>
            <CardMedia
              className={classes.image}
              image={USER_NOT_FOUND}
              title="user-not-found"
            />
            <Typography className={classes.text}>User not found</Typography>
          </Box>
        </>
      )}
      {!isUserNotFound &&
        (isStartPage ? (
          <StartPage />
        ) : (
          <UserContent
            userData={userData}
            numberOfReposPage={numberOfReposPage}
            paginateCurrentPage={paginateCurrentPage}
            handlePageClick={handlePageClick}
            paginateInfoObj={paginateInfoObj}
            isLoadingUserRepos={isLoadingUserRepos}
          />
        ))}
    </>
  );
};
