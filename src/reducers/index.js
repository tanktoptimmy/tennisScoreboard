import { combineReducers } from 'redux';
import PlayersReducer from './players';

const rootReducer = combineReducers({
    players: PlayersReducer
});

export default rootReducer;
