import {
  FETCH_PROJECTS_LIST,
  SEARCH_PROJECTS_LIST,
  SORT_PROJECTS_LIST
} from "../actions/types";

const initialState = {
  projects: []
};
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PROJECTS_LIST:
      return {
        ...state,
        projects: action.payload
      };
    case SEARCH_PROJECTS_LIST:
      if (action.value.length > 0) {
        return {
          ...state,
          projects: state.projects.filter(
            project => project.description.toLowerCase().indexOf(action.value.toLowerCase()) !== -1
          )
        };
      } else {
        return {
          ...state,
          projects: action.payload
        };
      }
    case SORT_PROJECTS_LIST:
      return {
        ...state,
        projects: action.payload
      };
    default:
      return state;
  }
}
