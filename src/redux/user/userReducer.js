import {
    GET_USER_LOADING, GET_USER_SUCCESS, GET_USER_ERROR 
  } from './userTypes'
  
  const initialState = {
    loading: false,
    user: null,
    error: null
  }
  
  const userReducer = (state = initialState, action) => {
    switch(action.type){
      case GET_USER_LOADING: 
        return {
          ...state,
          loading: true
        }
      case GET_USER_SUCCESS: 
        return {
          ...state,
          loading: false,
          user: action.payload,
          error: null
        }
      case GET_USER_ERROR: 
        return {
          ...state,
          loading: false,
          error: action.payload
        }
      default: return state
    }
  }
  
  export default userReducer