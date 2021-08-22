import { GET_SINGLE_CHARACTER } from '../actions/types';

const initialState = {
  loading: true,
};

const character = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_SINGLE_CHARACTER:
      return {
        ...state,
        ...payload,
        loading: false,
      };

    default:
      return state;
  }
};
export default character;
