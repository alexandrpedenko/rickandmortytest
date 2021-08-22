import { combineReducers } from 'redux';
import characters from './characters';
import character from './character';
import episodes from './episodes';
import locations from './locations';
import myWatchList from './myWatchList';

export default combineReducers({
  characters,
  character,
  episodes,
  locations,
  myWatchList,
});
