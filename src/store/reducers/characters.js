import {
  GET_CHARACTERS,
  PAGINATE_CHARACTERS,
  FILTER_CHARACTER,
} from '../actions/types';

const initialState = {
  loading: true,
};

const characters = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CHARACTERS: {
      let error = payload.error ? payload.error : null;
      return {
        ...state,
        ...payload,
        loading: false,
        error,
      };
    }
    case PAGINATE_CHARACTERS: {
      let error = payload.error ? payload.error : null;

      return {
        ...state,
        ...payload,
        loading: false,
        error,
      };
    }
    case FILTER_CHARACTER: {
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
export default characters;
