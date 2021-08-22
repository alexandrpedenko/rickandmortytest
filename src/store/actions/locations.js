import { GET_LOCATIONS, PAGINATE_LOCATIONS, FILTER_LOCATIONS } from './types';

// Get locations
export const getLocations = () => async (dispatch) => {
  try {
    const res = await fetch(`https://rickandmortyapi.com/api/location`);
    const data = await res.json();

    dispatch({
      type: GET_LOCATIONS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

// Get Pagintate locations page
export const paginateLocations = (link) => async (dispatch) => {
  try {
    const res = await fetch(link);
    const data = await res.json();

    dispatch({
      type: PAGINATE_LOCATIONS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

// Get Filter locations
export const getFilterLocations = (formData) => async (dispatch) => {
  try {
    const { name, type, dimension } = formData;

    const res = await fetch(
      `https://rickandmortyapi.com/api/location/?&name=${name}&type=${type}&dimension=${dimension}`
    );
    const data = await res.json();

    dispatch({
      type: FILTER_LOCATIONS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
