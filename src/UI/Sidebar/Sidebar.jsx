import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Paper, Typography, TextField, Button, Box } from '@material-ui/core';
import {
  capitalizeFirstLetter,
  checkObjectPropLength,
} from '../../utils/utils';

const useStyles = makeStyles((theme) => ({
  sidebar: {
    padding: theme.spacing(2),
  },
  resetFilter: {
    marginTop: theme.spacing(2),
  },
  filterItem: {
    display: 'inline-block',
    margin: theme.spacing(1, 1, 1, 0),
    padding: theme.spacing(0.5, 1),
    border: '1px solid #eee',
    borderRadius: '6px',
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.primary.red,
      borderColor: theme.palette.primary.red,
    },
  },
}));

const Sidebar = ({ filterNames, filterFunction, resetFilterFunction }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const [acitveFilter, setActiveFilter] = useState(false);
  const [resetFilterItem, setResetFilterItem] = useState(false);
  const [formData, setFormData] = useState(
    filterNames.reduce((acc, key) => ({ ...acc, [key]: '' }), {})
  );

  useEffect(() => {
    if (resetFilterItem) {
      dispatch(filterFunction(formData));
      if (!checkObjectPropLength(formData)) {
        setActiveFilter(false);
      }
      setResetFilterItem(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetFilterItem]);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (checkObjectPropLength(formData)) {
      setActiveFilter(true);
      dispatch(filterFunction(formData));
    }
  };

  const resetFilterHandler = () => {
    setActiveFilter(false);
    setFormData(filterNames.reduce((acc, key) => ({ ...acc, [key]: '' }), {}));
    dispatch(resetFilterFunction());
  };

  const closeFilterItem = (key) => {
    if (key in formData) {
      setFormData({ ...formData, [key]: '' });
      setResetFilterItem(true);
    }
  };

  const filterItems = Object.keys(formData).map((key) => {
    if (formData[key].length > 0) {
      return (
        <span
          className={styles.filterItem}
          key={key}
          onClick={() => closeFilterItem(key)}
        >
          {formData[key]} &times;
        </span>
      );
    } else {
      return null;
    }
  });

  return (
    <aside>
      <Paper elevation={1} className={styles.sidebar}>
        <Typography variant='h5'>Filter</Typography>
        <form onSubmit={onSubmit}>
          {filterNames &&
            filterNames.map((itemName) => (
              <Box pt={2.5} pb={2.5} key={itemName}>
                <TextField
                  fullWidth
                  label={capitalizeFirstLetter(itemName)}
                  name={itemName}
                  value={formData[itemName]}
                  onChange={(e) => onChange(e)}
                />
              </Box>
            ))}
          <Box pt={2.5}>
            <Button type='submit' variant='contained' color='primary'>
              Apply filter
            </Button>
            {acitveFilter && (
              <Button
                color='secondary'
                className={styles.resetFilter}
                onClick={resetFilterHandler}
              >
                Reset Filter
              </Button>
            )}
          </Box>
          {acitveFilter && <div className='filterdata'>{filterItems}</div>}
        </form>
      </Paper>
    </aside>
  );
};

Sidebar.propTypes = {
  filterNames: PropTypes.array,
  filterFunction: PropTypes.func,
};

export default Sidebar;
