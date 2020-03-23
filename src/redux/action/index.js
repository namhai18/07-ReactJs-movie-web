import * as ActionType from "./../constant/ActionType"

export const getListMovies = (listMovie) => {
    return {
            type: ActionType.GET_LIST_MOVIE,
            data: listMovie
          }
    };
