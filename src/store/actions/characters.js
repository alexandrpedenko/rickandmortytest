import { GET_CHARACTERS, PAGINATE_CHARACTERS, FILTER_CHARACTER } from './types';

// Get Characters
export const getCharacters = () => async (dispatch) => {
  try {
    const res = await fetch(`https://rickandmortyapi.com/api/character`);
    const data = await res.json();

    dispatch({
      type: GET_CHARACTERS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

// Get Pagintate characters page
export const paginateCharacters = (link) => async (dispatch) => {
  try {
    const res = await fetch(link);
    const data = await res.json();

    dispatch({
      type: PAGINATE_CHARACTERS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

// Get Filter Characters
export const getFilterCharacters = (formData) => async (dispatch) => {
  try {
    const { species, status, gender } = formData;

    const res = await fetch(
      `https://rickandmortyapi.com/api/character/?&species=${species}&status=${status}&gender=${gender}`
    );
    const data = await res.json();

    dispatch({
      type: FILTER_CHARACTER,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
