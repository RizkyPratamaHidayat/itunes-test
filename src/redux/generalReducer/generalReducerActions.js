import * as types from "./generalReducerTypes";

export const setSongList = (payload) => {
  return {
    type: types.SET_SONG_LIST,
    payload,
  };
};

export const setModalSearch = (payload) => {
    return {
      type: types.SET_MODAL_SEARCH,
      payload,
    };
  };
  