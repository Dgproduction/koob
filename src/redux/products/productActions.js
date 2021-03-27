
import axios from 'axios'
import {
  GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR, GET_CATEGORIES 
} from './productTypes'

const getRequest = () => {
  return {
    type: GET_PRODUCTS_LOADING,
  }
}

const getRequestSuccess = (data) => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: data
  }
}

const getRequestError = (error) => {
  return {
    type: GET_PRODUCTS_ERROR,
    payload: error
  }
}

export const loadProducts = (category) => {
  return async (dispatch) => {
    dispatch(getRequest())
    try{
      let url = 'https://fakestoreapi.com/products/'
      if(category) url += `category/${category}`
      const response = await axios.get(url, (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Max-Age", "1800");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
         })
      console.log(response)
      dispatch(getRequestSuccess(response.data))
    }
    catch(error){
      dispatch(getRequestError(error.message))
    }
  }
}

export const loadCategories = () => {
  return async (dispatch) => {
    try{
      const response = await axios.get('https://fakestoreapi.com/products/categories',  {
        headers: {'Access-Control-Allow-Origin': '*'}})
      dispatch({
        type: GET_CATEGORIES,
        payload: response.data
      })
    }
    catch(error){
      dispatch(getRequestError(error.message))
    }
  }
}
