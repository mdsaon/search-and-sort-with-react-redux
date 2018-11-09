import {
  FETCH_PROJECTS_LIST,
  SEARCH_PROJECTS_LIST,
  SORT_PROJECTS_LIST
} from "./types";
import axios from "axios";

export const getProjects = () => dispatch => {
  axios
    .get("https://sievo-react-assignment.azurewebsites.net/api/data")
    .then(res =>
      dispatch({
        type: FETCH_PROJECTS_LIST,
        payload: res.data
      })
    );
};

export const searchProjects = value => dispatch => {
  axios
    .get("https://sievo-react-assignment.azurewebsites.net/api/data")
    .then(res =>
      dispatch({
        type: SEARCH_PROJECTS_LIST,
        payload: res.data,
        value: value
      })
    );
};

export const sortProjectsASC = () => (dispatch, getProjects) => {
  let defaultProjects = getProjects().projects.projects;
  const sortedProjects = defaultProjects.sort(
    (a, b) => a["project"] - b["project"]
  );
  dispatch({
    type: SORT_PROJECTS_LIST,
    payload: sortedProjects
  });
};

export const sortProjectsDESC = () => (dispatch, getProjects) => {
  let defaultProjects = getProjects().projects.projects;
  const sortedProjects = defaultProjects.sort(
    (a, b) => b["project"] - a["project"]
  );
  dispatch({
    type: SORT_PROJECTS_LIST,
    payload: sortedProjects
  });
};
