import regeneratorRuntime from "regenerator-runtime";
import jdCrypto from "../services/encryption";
const isEmpty = require("is-empty-object");

const SET_LOGIN_PENDING = 'SET_LOGIN_PENDING';
const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';
const SET_USER_PATH = "SET_USER_PATH";

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

function setUserPath(userPath) {
  return {
    type: SET_USER_PATH,
    userPath
  };
}

function callLoginApi(ID, password, callback) {

  async function loginAuth(idnum) {
    let ID_NUM = idnum;
    const response = await fetch(`https://asgard-api.azurewebsites.net/users/${ID_NUM}`);
    const myJson = await response.json(); //extract JSON from the http response

    // Case where you don't find the ID
    console.log(myJson);
    if (isEmpty(myJson)) {
      console.log("we here");
      return callback({ userPath: null, error: new Error("Invalid ID and password!") });
    }

    if (jdCrypto.authenticate(password, myJson.password, myJson.Salt)) {
      // alert("Correct password!");
      if (myJson.UsrType == "QA") {
        return callback({ userPath: "/dashboard", error: null });
      } else {
        return callback({ userPath: "/input", error: null });
      }
    } else {
      return callback({ userPath: null, error: new Error("Invalid ID and password!") });
    }
  }
  loginAuth(ID);
}

export function login(ID, password) {
  return dispatch => {
    dispatch(setLoginPending(true));
    dispatch(setLoginSuccess(false));
    dispatch(setLoginError(null));
    dispatch(setUserPath(null));

    callLoginApi(ID, password, retVal => {
      dispatch(setLoginPending(false));
      if (!retVal.error) {
        dispatch(setLoginSuccess(true));
        dispatch(setUserPath(retVal.userPath));
      } else {
        dispatch(setLoginError(retVal.error));
      }
    });
  }
}

export function logout() {
  // alert("you called logout!");
  return dispatch => {
    dispatch(setLoginPending(false));
    dispatch(setLoginSuccess(false));
    dispatch(setLoginError(null));
    dispatch(setUserPath(null));
  }
}

export default function auth_reducer(state = {
  isLoginSuccess: false,
  isLoginPending: false,
  loginError: null,
  userPath: null
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
    case SET_USER_PATH:
      return Object.assign(
        {},
        state,
        { userPath: action.userPath }
      );

    default:
      return state;
  }
}
