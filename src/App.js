import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from './UI/Footer/Footer';
import Heaader from './UI/Header/Heaader';
import Characters from './pages/Characters/Characters';
import Episodes from './pages/Episodes/Episodes';
import Locations from './pages/Locations/Locations';
import MyWatchList from './pages/MyWatchList/MyWatchList';
import store from './store/store';
import { theme } from './lib/theme';
import './styles/global.sass';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className='main-wrapper'>
          <CssBaseline />
          <div className='content-wrapper'>
            <Router>
              <Heaader />
              <Switch>
                <Route exact path='/characters' component={Characters} />
                <Route exact path='/episodes' component={Episodes} />
                <Route exact path='/locations' component={Locations} />
                <Route exact path='/mywatchlist' component={MyWatchList} />
                <Redirect to='/characters' />
              </Switch>
            </Router>
          </div>
          <Footer className='footer-wrapper' />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
