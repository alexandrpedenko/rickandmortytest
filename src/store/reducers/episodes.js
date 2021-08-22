import {
  GET_EPISODES,
  PAGINATE_EPISODES,
  FILTER_EPISODES,
} from '../actions/types';

const initialState = {
  loading: true,
  error: null,
};

const episodes = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_EPISODES: {
      let error = payload.error ? payload.error : null;

      return {
        ...state,
        ...payload,
        loading: false,
        error,
      };
    }

    case PAGINATE_EPISODES: {
      let error = payload.error ? payload.error : null;

      return {
        ...state,
        ...payload,
        loading: false,
        error,
      };
    }

    case FILTER_EPISODES: {
      let error = payload.error ? payload.error : null;

      return {
        ...state,
        ...payload,
        loading: false,
        error,
      };
    }

    default:
      return state;
  }
};
export default episodes;
