import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import WatchListForm from '../../UI/WatchListForm/WatchListForm';
import Layout from '../../UI/Layout/Layout';

import {
  addEpisodeToList,
  getWatchListEpisodes,
  marckAsWatched,
  removeWatchListEpisode,
} from '../../store/actions/myWatchList';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    border: '1px solid #eaeaea',
    backgroundColor: theme.palette.background.paper,
  },
  empty: {
    padding: theme.spacing(2),
  },
  watched: {
    color: '#fff',
    borderBottom: '1px solid',
    borderBlockColor: theme.palette.primary.dark,
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
}));

const MyWatchList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const watchList = useSelector((state) => state.myWatchList);

  useEffect(() => {
    dispatch(getWatchListEpisodes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleToggle = (value) => {
    dispatch(marckAsWatched(value));
  };

  const removeEpisodeHandler = (value) => {
    dispatch(removeWatchListEpisode(value));
  };

  return (
    <Layout sidebar={<WatchListForm addEpisodeFunction={addEpisodeToList} />}>
      <>
        <Typography variant='h4' component='h1' gutterBottom>
          My Watch List
        </Typography>
        {watchList && watchList.episodes.length > 0 ? (
          <List className={classes.root} elevation={1}>
            {watchList.episodes.map((episode, index) => (
              <ListItem
                key={`${episode.episodeName} + ${index}`}
                className={episode.watched ? classes.watched : ''}
                role={undefined}
                dense
                button
                onClick={() => handleToggle(episode.episodeName)}
              >
                <ListItemIcon>
                  <Checkbox
                    edge='start'
                    color='default'
                    checked={episode.watched ? episode.watched : false}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': episode.episodeName }}
                  />
                </ListItemIcon>
                <ListItemText
                  id={episode.episodeName}
                  primary={episode.episodeName}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge='end'
                    aria-label='Delete'
                    onClick={() => removeEpisodeHandler(episode.episodeName)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        ) : (
          <Paper elevation={1} className={classes.empty}>
            <Typography variant='h6'>
              There are no episodes in your list yet{' '}
            </Typography>
          </Paper>
        )}
      </>
    </Layout>
  );
};

export default MyWatchList;
