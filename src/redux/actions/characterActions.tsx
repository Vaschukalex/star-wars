import { ActionTypes } from "../contants/action-types"
export const setCharacters = (characters?) => {
return {
    type: ActionTypes.SET_CHARACTERS,
    payload: characters,
};
};

export const selectedCharacters = (character?) => {
    return {
        type: ActionTypes.SELECTED_CHARACTER,
        payload: character,
    };
    };

    export const addToFavoriteCharacters = (favotite_characters?) => {
        return {
            type: ActionTypes.ADD_TO_FAVORITE,
            payload: favotite_characters,
        };
        };

        export const removeFromFavoriteCharacters = (favotite_characters?) => {
            return {
                type: ActionTypes.REMOVE_FROM_FAVORITE,
                payload: favotite_characters,
            };
            };

    export const removeSelectedCharacter = (character?) => {
        return {
            type: ActionTypes.REMOVE_SELECTED_CHARACTER,
        };
        };

        export const removeSelectedCharacters = (character?) => {
            return {
                type: ActionTypes.REMOVE_SELECTED_CHARACTERS,
            };
            };