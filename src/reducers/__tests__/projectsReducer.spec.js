import projectsReducer from "../projectsReducer";
import {
    FETCH_PROJECTS_LIST,
    SEARCH_PROJECTS_LIST,
    SORT_PROJECTS_LIST
  } from "../../actions/types";
  

describe("Projects Reducer", () => {
  it("Should return the initial state if state is not provided", () => {
    const initialState = { projects: [] };
    const action = {};
    expect(projectsReducer(undefined, action)).toEqual(initialState);
  });
  it("Should return the default state", () => {
    const state = {};
    const action = {};
    expect(projectsReducer(state, action)).toBe(state);
  });
  it("Should return the modified state after dispatching the FETCH_PROJECTS_LIST" , () => {
    const prevState = { projects:[]};
    const action = {type:FETCH_PROJECTS_LIST,payload:[]};
    const state = projectsReducer(prevState,action);
    expect(state.projects).toBe(action.payload);
  });
  it("Should return the modified state after dispatching the SEARCH_PROJECTS_LIST" , () => {
    const prevState = { projects:[]};
    const action = {type:SEARCH_PROJECTS_LIST,payload:[{description: 'foo'}],value:'foo'};
    const state = projectsReducer(prevState,action);
    expect(state.projects).toEqual([]);
  });
  it("Should return the modified state after dispatching the SORT_PROJECTS_LIST" , () => {
    const prevState = { projects:[]};
    const action = {type:SORT_PROJECTS_LIST,payload:[]};
    const state = projectsReducer(prevState,action);
    expect(state.projects).toBe(action.payload);
  });
});
