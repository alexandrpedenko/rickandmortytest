import {
  ADD_TO_MY_WATCH_LIST,
  GET_MY_WATCH_LIST,
  MARK_EPISODE,
  DELETE_EPISODE,
} from './types';

// Add Episodes
export const addEpisodeToList = (episodeName) => {
  return {
    type: ADD_TO_MY_WATCH_LIST,
    payload: episodeName,
  };
};

// Get Episodes
export const getWatchListEpisodes = () => {
  return {
    type: GET_MY_WATCH_LIST,
  };
};

// Marck as watched Episodes
export const marckAsWatched = (episodeName) => {
  return {
    type: MARK_EPISODE,
    payload: episodeName,
  };
};

// Delete Episodes
export const removeWatchListEpisode = (episodeName) => {
  return {
    type: DELETE_EPISODE,
    payload: episodeName,
  };
};
