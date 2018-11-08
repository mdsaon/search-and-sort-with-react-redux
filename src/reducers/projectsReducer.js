import { FETCH_PROJECTS_LIST, SEARCH_PROJECTS_LIST, SORT_PROJECTS_LIST } from '../actions/types';

const initialState = {
 projects:[],
};
export default function(state=initialState, action){
    switch(action.type){
        case FETCH_PROJECTS_LIST:
        return {
            ...state,
            projects:action.payload,
        };
        case SEARCH_PROJECTS_LIST:
        return {
            ...state,
            projects:state.projects.filter(project =>project.description.indexOf(action.value)!==-1),
        };
        case SORT_PROJECTS_LIST:
        return {
            ...state,
            projects:action.payload,
            //projects:state.projects.sort((a,b) => a.project < b.project),
        };
        default:
        return state;
    }
}