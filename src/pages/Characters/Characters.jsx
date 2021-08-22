import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Grid } from '@material-ui/core';
import Pagination from '../../UI/Pagination/Pagination';
import Sidebar from '../../UI/Sidebar/Sidebar';
import Layout from '../../UI/Layout/Layout';
import Post from '../../UI/Post/Post';
import Alert from '../../UI/Alert/Alert';
import {
  getCharacters,
  paginateCharacters,
  getFilterCharacters,
} from '../../store/actions/characters';

const Characters = () => {
  const dispatch = useDispatch();
  const filterNames = ['species', 'status', 'gender'];
  const characters = useSelector((state) => state.characters);
  const error = useSelector((state) => state.characters.error);

  useEffect(() => {
    dispatch(getCharacters());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout
      sidebar={
        <Sidebar
          filterNames={filterNames}
          filterFunction={getFilterCharacters}
          resetFilterFunction={getCharacters}
        />
      }
    >
      <>
        {error && <Alert message={error} />}
        <Typography variant='h4' component='h1' gutterBottom>
          Characters
        </Typography>
        <Grid container spacing={4}>
          {characters &&
            characters.results &&
            characters.results.map((character) => (
              <Post key={character.name + character.id} post={character} />
            ))}
        </Grid>
        {characters.info && characters.info.pages > 1 && (
          <Pagination
            info={characters.info}
            paginateFunction={paginateCharacters}
          />
        )}
      </>
    </Layout>
  );
};

export default Characters;
