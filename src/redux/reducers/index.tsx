 import { combineReducers } from "redux";
 import { favoriteCharacters, characterReducer, selectedCharacterReducer } from './characterReducer';


 const reducers = combineReducers({
    allCharacters: characterReducer,
    character: selectedCharacterReducer,
    favoriteCharacters: favoriteCharacters,
 });

 export default reducers;