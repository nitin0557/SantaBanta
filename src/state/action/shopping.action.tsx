import axios from "axios";
import { Dispatch } from "redux";
import { 
    FETCH_SHOPPING_DATA_REQUEST,
    FETCH_SHOPPING_DATA_SUCCESS,
    FETCH_SHOPPING_DATA_FAILURE 
} from "../constants";

import { fetchdata } from "../constants";

interface FETCH_SHOPPING_DATA_REQUEST{
    type: typeof FETCH_SHOPPING_DATA_REQUEST,
}

interface FETCH_SHOPPING_DATA_SUCCESS{
    type: typeof FETCH_SHOPPING_DATA_SUCCESS,
    payload: any
}

interface FETCH_SHOPPING_DATA_FAILURE{
    type: typeof FETCH_SHOPPING_DATA_FAILURE,
    error: string
}

export type Actiontypes = 
    FETCH_SHOPPING_DATA_REQUEST |
    FETCH_SHOPPING_DATA_SUCCESS |
    FETCH_SHOPPING_DATA_FAILURE 


export const fetchShopping = () => {
    return (
    async (dispatch: Dispatch<Actiontypes>) => {
        dispatch({
            type: FETCH_SHOPPING_DATA_REQUEST,
          })
  
 try{
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    dispatch({
        type: FETCH_SHOPPING_DATA_SUCCESS,
        payload: fetchdata
      })

 }catch(error){
    // dispatch({
    //     type: FETCH_SHOPPING_DATA_FAILURE,
    //     error: error.message
    //   })

 }})
}