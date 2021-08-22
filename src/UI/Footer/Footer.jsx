import React from 'react'
import {
  AppBar,
  Typography,
} from '@material-ui/core';
import './footer.sass'

const Footer = () => {
  return (
    <AppBar className="footer" position='relative' color='inherit' >
      <Typography variant='body2'>Rick and Morty Test Task &copy; {new Date().getFullYear()}</Typography>
    </AppBar>
  )
}

export default Footer
