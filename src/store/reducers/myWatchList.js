import {
  ADD_TO_MY_WATCH_LIST,
  GET_MY_WATCH_LIST,
  MARK_EPISODE,
  DELETE_EPISODE,
} from '../actions/types';

const initialState = {
  episodes: [],
  loading: true,
};

const myWatchList = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_MY_WATCH_LIST:
      return {
        ...state,
        episodes: [...state.episodes, { episodeName: payload, watched: false }],
        loading: false,
      };
    case DELETE_EPISODE:
      return {
        ...state,
        episodes: state.episodes.filter(
          (episode) => episode.episodeName !== payload
        ),
        loading: false,
      };
    case MARK_EPISODE:
      return {
        ...state,
        episodes: state.episodes.map((episode) =>
          episode.episodeName === payload
            ? { ...episode, watched: !episode.watched }
            : episode
        ),
        loading: false,
      };

    case GET_MY_WATCH_LIST:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
export default myWatchList;
