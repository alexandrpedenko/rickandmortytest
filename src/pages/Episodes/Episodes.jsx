import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { createData } from '../../utils/utils';
import Pagination from '../../UI/Pagination/Pagination';
import Sidebar from '../../UI/Sidebar/Sidebar';
import Layout from '../../UI/Layout/Layout';
import DenseTable from '../../UI/Table/Table';
import Alert from '../../UI/Alert/Alert';
import {
  getEpisodes,
  paginateEpisodes,
  getFilterEpisodes,
} from '../../store/actions/episodes';

const Episodes = () => {
  const dispatch = useDispatch();
  const episodes = useSelector((state) => state.episodes);
  const error = useSelector((state) => state.episodes.error);
  const filterNames = ['name'];
  const tableTitles = ['Name', 'Episode', 'Air Date'];
  let tableBody;

  useEffect(() => {
    dispatch(getEpisodes());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (episodes.results) {
    const rows = episodes.results.map((post) => {
      return createData(post);
    });

    tableBody = rows.map((row) => (
      <TableRow key={row.name}>
        <TableCell align='left'>{row.name}</TableCell>
        <TableCell align='left'>{row.episode}</TableCell>
        <TableCell align='left'>{row.air_date}</TableCell>
      </TableRow>
    ));
  }

  return (
    <Layout
      sidebar={
        <Sidebar
          filterNames={filterNames}
          filterFunction={getFilterEpisodes}
          resetFilterFunction={getEpisodes}
        />
      }
    >
      <>
        {error && <Alert message={error} />}
        <Typography variant='h4' component='h1' gutterBottom>
          Episodes
        </Typography>
        {episodes && episodes.results && (
          <DenseTable
            featuredPosts={episodes.results}
            tableBody={tableBody}
            tableTitles={tableTitles}
          />
        )}
        {episodes.info && episodes.info.pages > 1 && (
          <Pagination
            info={episodes.info}
            paginateFunction={paginateEpisodes}
          />
        )}
      </>
    </Layout>
  );
};

export default Episodes;
