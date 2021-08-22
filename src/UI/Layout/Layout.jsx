import { Container, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';

const Layout = ({ sidebar, children }) => {
  return (
    <Container maxWidth='lg' className='container'>
      <Grid container spacing={5}>
        <Grid item xs={12} md={3}>
          {sidebar}
        </Grid>
        <Grid item xs={12} md={9}>
          <main>{children}</main>
        </Grid>
      </Grid>
    </Container>
  );
};

Layout.propTypes = {
  sidebar: PropTypes.element,
  children: PropTypes.element,
};

export default Layout;
