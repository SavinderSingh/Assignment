
import apis from "../networkRequest/APIs";
import AxiosBase from "../networkRequest/AxiosBase"
import actionTypes from "./actionTypes";

export const setCharactersList = (list) => {
    return async dispatch => {
        dispatch({
            type : actionTypes.CHARACTERS_LIST,
            charactersList : list
        })
    }
}


export const getCharactersList = (page) => new Promise((resolve, reject) => {
    AxiosBase.get(`${apis.CHARACTERS_LIST}/?page=${page}`)
        .then(response => {
            resolve(response.data)
        })
        .catch(error => {
            reject(error)
        })
})


