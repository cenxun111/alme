import { POST_TYPES } from "../actions/postAction";

const initialState = {
    loading: false,
    posts: []
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_TYPES.CREATE_POST:
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            };
        case POST_TYPES.LOADING_POST:
            return {
                ...state,
                loading: action.payload
            };
        case POST_TYPES.GET_POSTS:
            return {
                ...state,
                posts: action.payload.posts
            };
        default:
            return state;
    }
}

export default postReducer