
import { ActionTypes } from "../contants/action-types";
interface T {
    characters: any;
    favotite_characters: any;
 }
const initialState:T = {
    characters: [],
    favotite_characters: [],

}


export const characterReducer = (state = initialState, {type, payload} ) => {


    switch (type) {
    case ActionTypes.SET_CHARACTERS:
        return {...state, characters: payload};

    default:
        return  state;


    }
}
export const favoriteCharacters = (state = initialState, {type, payload} ) => {


    switch (type) {
    case ActionTypes.ADD_TO_FAVORITE:
        if(state.favotite_characters.includes(payload[0]) ){
            return {...state, favotite_characters: state.favotite_characters}
        }
        else{
            return{...state, favotite_characters: state.favotite_characters.concat(payload)}
        }
        

    default:
        return  state;


    }
}
export const selectedCharacterReducer = (state={}, {type, payload}) =>{

    switch (type) {
        case ActionTypes.SELECTED_CHARACTER:

            return { ...state, ...payload};
            

        case ActionTypes.REMOVE_SELECTED_CHARACTER:

            return {};
            case ActionTypes.REMOVE_SELECTED_CHARACTERS:

                return {};
                
    
        default:

            return state;
    }

}