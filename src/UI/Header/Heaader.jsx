import { AppBar, Toolbar } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import Menu from '../Menu/Menu';
import logo from './logo.png';
import './header.sass';

const Heaader = () => {
  return (
    <AppBar
      className='header'
      position='relative'
      color='inherit'
      elevation={1}
    >
      <Toolbar className='header__wrapper'>
        <NavLink to='/' className='header__logo'>
          <img src={logo} alt='Rick and morty' />
        </NavLink>
        <Menu />
      </Toolbar>
    </AppBar>
  );
};

export default Heaader;
