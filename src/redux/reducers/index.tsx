import { combineReducers } from "redux";
import { favoriteCharacters_f, characterReducer, selectedCharacterReducer, planetsReducer } from './characterReducer';


const reducers = combineReducers({
   allCharacters: characterReducer,
   character: selectedCharacterReducer,
   favoriteCharacters: favoriteCharacters_f,
   planets: planetsReducer,
});

export default reducers;