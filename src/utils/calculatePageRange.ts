import { MAX_REPOS_ON_PAGE } from "appConstants/constants";

export const calculatePageRange = (
  allRepos: number | null,
  currenPage: number,
  reposOnPage = MAX_REPOS_ON_PAGE
) => {
  const pageRangeAnswer = { firstPage: 0, lastPage: 0, allRepos: 0 };
  if (allRepos === null) {
    return pageRangeAnswer;
  }

  const lastPage = currenPage * reposOnPage;
  if (allRepos > lastPage) {
    pageRangeAnswer.lastPage = lastPage;
    pageRangeAnswer.firstPage = pageRangeAnswer.lastPage - (reposOnPage - 1);
  } else {
    pageRangeAnswer.lastPage = allRepos;
    pageRangeAnswer.firstPage = (currenPage - 1) * reposOnPage + 1;
  }
  pageRangeAnswer.allRepos = allRepos;

  return pageRangeAnswer;
};
