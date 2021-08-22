import { GET_SINGLE_CHARACTER } from './types';

// Get Characters
export const getSingleCharacter = (id) => async (dispatch) => {
  try {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = await res.json();

    dispatch({
      type: GET_SINGLE_CHARACTER,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
