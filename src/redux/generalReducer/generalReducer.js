import * as types from "./generalReducerTypes";

const initialState = {
  songList: {
    data: [],
  },
  modalSearch: {
    visible: false,
  },
};

const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SONG_LIST:
      return {
        ...state,
        songList: {
          ...state.songList,
          ...action.payload,
        },
      };
      case types.SET_MODAL_SEARCH:
        return {
          ...state,
          modalSearch: {
            ...state.modalSearch,
            ...action.payload,
          },
        };
    default:
      return state;
  }
};

export default generalReducer;
