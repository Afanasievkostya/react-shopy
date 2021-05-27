import axios from 'axios';
import {ABOUT_LOGOUT, ABOUT_SUCCESS, ABOUT_NAME, ABOUT_EMAIL} from './actionTypes';

export function about(email, password) {
  return async dispatch => {
    const aboutData = {
      email, password,
      returnSecureToken: true
    }

    let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCvN3kB8wcdzr1vtGXy_6o0ISa78cOwecw'

    const response = await axios.post(url, aboutData)
    const data = response.data

    const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000)

    localStorage.setItem('userName', data.displayName)
    localStorage.setItem('userEmail', data.email)
    localStorage.setItem('token', data.idToken)
    localStorage.setItem('userId', data.localId)
    localStorage.setItem('expirationDate', expirationDate)

    dispatch(aboutName(data.displayName))
    dispatch(aboutEmail(data.email))
    dispatch(aboutSuccess(data.idToken))
    dispatch(autoLogout(data.expiresIn))
  }
}

export function autoLogout(time) {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout())
    }, time * 1000)
  }
}

export function logout() {
  // localStorage.removeItem('userName')
  localStorage.removeItem('token')
  localStorage.removeItem('userId')
  localStorage.removeItem('expirationDate')
  return {
    type: ABOUT_LOGOUT
  }
}

export function autoLogin() {
  return dispatch => {
    const token = localStorage.getItem('token')
    if (!token) {
      dispatch(logout())
    } else {
      const expirationDate = new Date(localStorage.getItem('expirationDate'))
      if (expirationDate <= new Date()) {
        dispatch(logout())
      } else {
        dispatch(aboutSuccess(token))
        dispatch(autoLogout((expirationDate.getTime() - new Date().getTime()) / 1000))
      }
    }
  }
}

export function aboutSuccess(token) {
  return {
    type: ABOUT_SUCCESS,
    token
  }
}

export function aboutName(userName) {
  return {
    type: ABOUT_NAME,
    userName
  }
}

export function aboutEmail(userEmail) {
  return {
    type: ABOUT_EMAIL,
    userEmail
  }
}
