const inicialState = {
    postId: null
}

const reducer = (state = inicialState, action) =>{
    if(action.type === 'GETPROJECTID'){
        return{
            ...state,
            postId: action.projectId
        }
    }
    return state;
}

export default reducer;