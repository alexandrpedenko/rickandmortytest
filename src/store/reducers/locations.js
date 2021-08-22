import {
  GET_LOCATIONS,
  PAGINATE_LOCATIONS,
  FILTER_LOCATIONS,
} from '../actions/types';

const initialState = {
  loading: true,
};

const locations = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_LOCATIONS: {
      let error = payload.error ? payload.error : null;

      return {
        ...state,
        ...payload,
        loading: false,
        error,
      };
    }
    case PAGINATE_LOCATIONS: {
      let error = payload.error ? payload.error : null;

      return {
        ...state,
        ...payload,
        loading: false,
        error,
      };
    }

    case FILTER_LOCATIONS: {
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
export default locations;
