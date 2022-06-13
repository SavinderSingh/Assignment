import { USER_ADMIN } from "../../values/strings";
import actionTypes from "../actions/actionTypes";

let initialState = {
    charactersList : []
}


export default homeReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.CHARACTERS_LIST:
            return{
                ...state,
                charactersList : action.charactersList
            }
       
    }
    return state;
    
}