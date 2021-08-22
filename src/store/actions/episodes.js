import { GET_EPISODES, PAGINATE_EPISODES, FILTER_EPISODES } from './types';

// Get Episodes
export const getEpisodes = () => async (dispatch) => {
  try {
    const res = await fetch(`https://rickandmortyapi.com/api/episode`);
    const data = await res.json();

    dispatch({
      type: GET_EPISODES,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

// Get Pagintate episodes page
export const paginateEpisodes = (link) => async (dispatch) => {
  try {
    const res = await fetch(link);
    const data = await res.json();

    dispatch({
      type: PAGINATE_EPISODES,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

// Get Filter episodes
export const getFilterEpisodes = (formData) => async (dispatch) => {
  let data;
  try {
    const { name } = formData;

    const res = await fetch(
      `https://rickandmortyapi.com/api/episode/?&name=${name}`
    );
    data = await res.json();

    // console.log(data);

    dispatch({
      type: FILTER_EPISODES,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
