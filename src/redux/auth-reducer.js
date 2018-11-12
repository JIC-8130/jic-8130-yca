import regeneratorRuntime from "regenerator-runtime";
import jdCrypto from "../services/encryption";

const SET_LOGIN_PENDING = 'SET_LOGIN_PENDING';
const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';
const SET_USER_TYPE = "SET_USER_TYPE";

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

function setUserType(userType) {
  return {
    type: SET_USER_TYPE,
    userType
  };
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
      if (myJson.UsrType == "QA") {
        return callback({ userType: "/dashboard", error: null });
      } else {
        return callback({ userType: "/input", error: null });
      }
    } else {
      return callback({ userType: null, error: new Error("Invalid ID and password!") });
    }
  }
  f(email);
}

export function login(email, password) {
  return dispatch => {
    dispatch(setLoginPending(true));
    dispatch(setLoginSuccess(false));
    dispatch(setLoginError(null));
    dispatch(setUserType(null));

    callLoginApi(email, password, retVal => {
      dispatch(setLoginPending(false));
      if (!retVal.error) {
        dispatch(setLoginSuccess(true));
        dispatch(setUserType(retVal.userType));
      } else {
        dispatch(setLoginError(retVal.error));
      }
    });
  }
}

export default function auth_reducer(state = {
  isLoginSuccess: false,
  isLoginPending: false,
  loginError: null,
  userType: null
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
    case SET_USER_TYPE:
      return Object.assign(
        {},
        state,
        { userType: action.userType }
      );

    default:
      return state;
  }
}