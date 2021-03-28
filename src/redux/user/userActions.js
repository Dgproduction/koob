
import axios from 'axios'
import {
  GET_USER_LOADING, GET_USER_SUCCESS, GET_USER_ERROR, GET_CATEGORIES 
} from './userTypes'

const getRequest = () => {
  return {
    type: GET_USER_LOADING,
  }
}

const getRequestSuccess = (data) => {
  return {
    type: GET_USER_SUCCESS,
    payload: data
  }
}

const getRequestError = (error) => {
  return {
    type: GET_USER_ERROR,
    payload: error
  }
}

export const loadUser = (data) => {
  return async (dispatch) => {
    dispatch(getRequest())
    try{

      dispatch(getRequestSuccess(data))
    }
    catch(error){
      dispatch(getRequestError(error.message))
    }
  }
}

