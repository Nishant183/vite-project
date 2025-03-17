const initialState={
    posts: [],
    loading: false,
    error: null,
}
const postReducer=(state=initialState, action)=>{
    switch(action.type){
        case 'FETCH_POSTS_REQUESTS':
            return {
                ...state,
                loading: true,
            };
        case 'FETCH_POSTS_SUCCESS':
            return {
                ...state,
                loading: false,
                posts: action.payload,
            };
        case 'FETCH_POSTS_FAILURE':
            return {
                ...state,
                loading: false,
                posts: error,
            };
        default:
            return state;
    }
};
export default postReducer;

/*
const initialState={count:0};
const postReducer=(state=initialState, action)=>{
    switch(action.type){
        case 'INCREMENT':
            return {count:state.count+1};
        case 'DECREMENT':
            return {count:state.count-1};
        default:
            return initialState;
    }
};
*/