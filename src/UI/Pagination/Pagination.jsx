import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import './pagination.sass';

const Pagination = ({ info, paginateFunction }) => {
  const dispatch = useDispatch();

  const handlePrevChange = () => {
    dispatch(paginateFunction(info.prev));
  };

  const handleNextChange = () => {
    dispatch(paginateFunction(info.next));
  };

  return (
    <div className='pagination'>
      {info.prev && (
        <Button onClick={handlePrevChange}>&laquo; Previous</Button>
      )}
      {info.next && <Button onClick={handleNextChange}>Next &raquo;</Button>}
    </div>
  );
};

Pagination.propTypes = {
  info: PropTypes.object,
  paginateFunction: PropTypes.func,
};

export default Pagination;
