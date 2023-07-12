// Import configure store from redux toolkit
import pkg from '@reduxjs/toolkit';
const { configureStore } = pkg;

// Actions and Actions TYPE
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

//Actions
function login(user) {
  return {
    type: LOGIN,
    payload: user,
    info: 'Login the user'
  }
}

function logout() {
  return {
    type: LOGOUT,
    info: 'Logout the user'
  }
}

// Init State
const initialState = {
    user: '',
    isLogged: false
}

// Reducers
function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
        isLogged: true
      }
    case LOGOUT:
        return {
            ...state,
            user: '',
            isLogged: false
          }
    default:
      return state
  }
}

// Store
const store = configureStore({ reducer: userReducer });
console.log('Initial state =>', store.getState());

// Dispatch login
store.dispatch(login('John Doe'));
console.log('Login =>', store.getState());

// Dispatch logout
store.dispatch(logout());
console.log('Logout =>', store.getState());