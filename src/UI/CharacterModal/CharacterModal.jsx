import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  characterRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(1, 0),
  },
}));

const CharacterModal = ({ open, setOpen, character }) => {
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <img src={character.image} alt={character.name} />
          <h2>{character.name}</h2>
          {character.status && (
            <div className={classes.characterRow}>
              <span>Status</span>
              <span>{character.status}</span>
            </div>
          )}

          {character.species && (
            <div className={classes.characterRow}>
              <span>Species</span>
              <span>{character.species}</span>
            </div>
          )}

          {character.gender && (
            <div className={classes.characterRow}>
              <span>Gender</span>
              <span>{character.gender}</span>
            </div>
          )}

          {character.location && (
            <div className={classes.characterRow}>
              <span>Location</span>
              <span>{character.location.name}</span>
            </div>
          )}
        </div>
      </Fade>
    </Modal>
  );
};

CharacterModal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  character: PropTypes.object,
};

export default CharacterModal;
