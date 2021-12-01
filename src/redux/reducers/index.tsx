 import { combineReducers } from "redux";
 import { favoriteCharacters_f, characterReducer, selectedCharacterReducer } from './characterReducer';


 const reducers = combineReducers({
    allCharacters: characterReducer,
    character: selectedCharacterReducer,
    favoriteCharacters: favoriteCharacters_f,
 });

 export default reducers;