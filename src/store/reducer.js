import projectHelper from '../helpers/Projects'
const inicialState = {
    postId: null,
    projects: null
}

const reducer = (state = inicialState, action) =>{
    if(action.type === 'GETPROJECTID'){
        return{
            ...state,
            postId: action.projectId
        }
    }

    if(action.type === 'VIEWPROJECT'){
        return{
            ...state,
            projects: projectHelper[state.postId]
        }
        console.log(state.projects)
    }
    return state;
}

export default reducer;