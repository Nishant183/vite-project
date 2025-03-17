export const fetchPostsRequests=()=>({
    type:'FETCH_POSTS_REQUESTS',
});

export const fetchPostsSuccess=(posts)=>({
    type:'FETCH_POSTS_SUCCESS',
    payload: posts,
});

export const fetchPostsFailure=(error)=>({
    type:'FETCH_POSTS_FAILURE',
    payload: error,
});

export const fetchPosts=()=>async(dispatch)=>{
    //Dispatch the fetch posts
    dispatch(fetchPostsRequests());
    try {
        const response=await fetch('https://jsonplaceholder.typicode.com/posts')
        const data=await response.json();
        dispatch(fetchPostsSuccess(data));
    } catch (error) {
        dispatch(fetchPostsFailure(error.message));
    }
};