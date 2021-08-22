import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CharacterModal from '../CharacterModal/CharacterModal';
import { getSingleCharacter } from '../../store/actions/character';
import './post.sass';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column-reverse',
    height: '100%',
  },
  cardAction: {
    height: '100%',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 'auto',
    height: 300,
  },
});

const Post = ({ post }) => {
  const character = useSelector((state) => state.character);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      dispatch(getSingleCharacter(post.id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <CardActionArea
        component='div'
        className={classes.cardAction}
        onClick={handleOpen}
      >
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component='h2' variant='h5'>
                {post.name}
              </Typography>
              <div className='post__tags'>
                <span>{post.gender}</span>
                <span>{post.species}</span>
                <span>{post.status}</span>
              </div>
              <Typography variant='subtitle1' color='primary'>
                View more
              </Typography>
            </CardContent>
          </div>
          <CardMedia
            className={classes.cardMedia}
            image={post.image}
            title={post.imageTitle}
          />
        </Card>
      </CardActionArea>
      {character && open && (
        <CharacterModal open={open} setOpen={setOpen} character={character} />
      )}
    </Grid>
  );
};

Post.propTypes = {
  post: PropTypes.object,
};

export default Post;
