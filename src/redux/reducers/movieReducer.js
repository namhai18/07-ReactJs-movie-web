import * as ActionType from "./../constant/ActionType";

let initialState = {
    listMovie: [],
    detailMovie: {}
};

const movieReducer = (state = initialState, action) => {
    // type - check type của action truyền lên Reducer 
    switch (action.type) {
        case ActionType.GET_LIST_MOVIE:
            state.listMovie = action.data;
            return { ...state };
        case ActionType.GET_DETAIL_MOVIE:
            state.detailMovie = action.data;
            return { ...state };
        // Return về state mới
        default:
            return { ...state };
    }
};

export default movieReducer;