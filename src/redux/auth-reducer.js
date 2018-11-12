import regeneratorRuntime from "regenerator-runtime";
import jdCrypto from "../services/encryption";

const SET_LOGIN_PENDING = 'SET_LOGIN_PENDING';
const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';

function setLoginPending(isLoginPending) {
  return {
    type: SET_LOGIN_PENDING,
    isLoginPending
  };
}

function setLoginSuccess(isLoginSuccess) {
  return {
    type: SET_LOGIN_SUCCESS,
    isLoginSuccess
  };
}

function setLoginError(loginError) {
  return {
    type: SET_LOGIN_ERROR,
    loginError
  }
}

function callLoginApi(email, password, callback) {
  // setTimeout(() => {
  //   if (email === 'admin@example.com' && password === 'admin') {
  //     return callback(null);
  //   } else {
  //     return callback(new Error('Invalid email and password'));
  //   }
  // }, 1000);
  async function f(idnum) {
    let ID_NUM = idnum;
    const response = await fetch(`https://asgard-api.azurewebsites.net/users/${ID_NUM}`);
    const myJson = await response.json(); //extract JSON from the http response
    // alert(JSON.stringify(myJson));
    // do something with myJson
    if (jdCrypto.authenticate(password, myJson.password, myJson.Salt)) {
      // alert("Correct password!");
      return callback(null);
    } else {
      return callback(new Error("Invalid ID and password!"));
    }
  }
  f(email);
}

export function login(email, password) {
  return dispatch => {
    dispatch(setLoginPending(true));
    dispatch(setLoginSuccess(false));
    dispatch(setLoginError(null));

    callLoginApi(email, password, error => {
      dispatch(setLoginPending(false));
      if (!error) {
        dispatch(setLoginSuccess(true));
      } else {
        dispatch(setLoginError(error));
      }
    });
  }
}

export default function auth_reducer(state = {
  isLoginSuccess: false,
  isLoginPending: false,
  loginError: null
}, action) {
  switch (action.type) {
    case SET_LOGIN_PENDING:
      return Object.assign({}, state, {
        isLoginPending: action.isLoginPending
      });

    case SET_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoginSuccess: action.isLoginSuccess
      });

    case SET_LOGIN_ERROR:
      return Object.assign({}, state, {
        loginError: action.loginError
      });

    default:
      return state;
  }
}