import {ABOUT_LOGOUT, ABOUT_SUCCESS, ABOUT_NAME, ABOUT_EMAIL} from '../actions/actionTypes'

const initialState = {
  token: null,
  userName: ''
}

export default function aboutReducer(state = initialState, action) {
  switch (action.type) {
    case ABOUT_SUCCESS:
     return {
       ...state, token: action.token
     }
     case ABOUT_LOGOUT:
      return {
        ...state, token: null
      }
    case ABOUT_NAME:
      return {
        ...state, userName: action.userName
      }
    case ABOUT_EMAIL:
      return {
        ...state, userEmail: action.userEmail
      }
    default:
      return state
  }

}
