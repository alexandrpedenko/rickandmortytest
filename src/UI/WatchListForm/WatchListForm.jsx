import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, TextField, Button, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  sidebar: {
    padding: theme.spacing(2),
  },
}));

const WatchListForm = ({ addEpisodeFunction }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    episodeName: '',
  });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (formData.episodeName.length > 0) {
      dispatch(addEpisodeFunction(formData.episodeName));
    }
  };

  return (
    <aside>
      <Paper elevation={1} className={styles.sidebar}>
        <Typography variant='h5'>Add Episode</Typography>
        <form onSubmit={onSubmit}>
          <Box pt={2.5} pb={2.5}>
            <TextField
              fullWidth
              label='Episode Name'
              name='episodeName'
              value={formData.episodeName}
              onChange={(e) => onChange(e)}
            />
          </Box>
          <Box pt={2.5}>
            <Button type='submit' variant='contained' color='primary'>
              Add
            </Button>
          </Box>
        </form>
      </Paper>
    </aside>
  );
};

WatchListForm.propTypes = {
  addEpisodeFunction: PropTypes.func,
};

export default WatchListForm;
