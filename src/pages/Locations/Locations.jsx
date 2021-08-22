import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { createData } from '../../utils/utils';
import { Typography } from '@material-ui/core';
import Pagination from '../../UI/Pagination/Pagination';
import Sidebar from '../../UI/Sidebar/Sidebar';
import Layout from '../../UI/Layout/Layout';
import DenseTable from '../../UI/Table/Table';
import Alert from '../../UI/Alert/Alert';
import {
  getLocations,
  paginateLocations,
  getFilterLocations,
} from '../../store/actions/locations';

const Locations = () => {
  const dispatch = useDispatch();
  const episodes = useSelector((state) => state.locations);
  const error = useSelector((state) => state.locations.error);
  const filterNames = ['name', 'type', 'dimension'];
  const tableTitles = ['Name', 'Type', 'Dimension'];
  let tableBody;

  useEffect(() => {
    dispatch(getLocations());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (episodes.results) {
    const rows = episodes.results.map((post) => {
      return createData(post);
    });

    tableBody = rows.map((row) => (
      <TableRow key={row.name}>
        <TableCell align='left'>{row.name}</TableCell>
        <TableCell align='left'>{row.type}</TableCell>
        <TableCell align='left'>{row.dimension}</TableCell>
      </TableRow>
    ));
  }

  return (
    <Layout
      sidebar={
        <Sidebar
          filterNames={filterNames}
          filterFunction={getFilterLocations}
          resetFilterFunction={getLocations}
        />
      }
    >
      <>
        {error && <Alert message={error} />}
        <Typography variant='h4' component='h1' gutterBottom>
          Locations
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
            paginateFunction={paginateLocations}
          />
        )}
      </>
    </Layout>
  );
};

export default Locations;
