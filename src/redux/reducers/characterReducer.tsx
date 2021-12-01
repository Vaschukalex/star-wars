
import { ActionTypes } from "../contants/action-types";
interface T {
    characters: any;
    favotite_characters: any;
    planets: any;
}
const initialState: T = {
    characters: [],
    favotite_characters: [],
    planets: [],

}


export const characterReducer = (state = initialState, { type, payload }) => {


    switch (type) {
        case ActionTypes.SET_CHARACTERS:
            return { ...state, characters: payload };

        default:
            return state;


    }
}

export const planetsReducer = (state = initialState, { type, payload }) => {


    switch (type) {
        case ActionTypes.SET_PLANET:
            return { ...state, planets: payload };

        default:
            return state;


    }
}

export const favoriteCharacters_f = (state = initialState, { type, payload }) => {


    switch (type) {
        case ActionTypes.ADD_TO_FAVORITE:

            if (state.favotite_characters.find(
                element =>
                    element.id[0] == payload.id[0]


            )) {
                return { ...state, favotite_characters: state.favotite_characters }
            }
            else {
                return { ...state, favotite_characters: state.favotite_characters.concat(payload) }
            }

        case ActionTypes.REMOVE_FROM_FAVORITE:
            return { ...state, favotite_characters: state.favotite_characters.filter((item) => item.id[0] !== payload.id[0]) }
        default:
            return state;


    }
}
export const selectedCharacterReducer = (state = {}, { type, payload }) => {

    switch (type) {
        case ActionTypes.SELECTED_CHARACTER:

            return { ...state, ...payload };


        case ActionTypes.REMOVE_SELECTED_CHARACTER:

            return {};
        case ActionTypes.REMOVE_SELECTED_CHARACTERS:

            return {};


        default:

            return state;
    }

}