import React from 'react';
import { connect } from 'react-redux';
import { login } from "../redux/auth-reducer"
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Key from '@material-ui/icons/VpnKey';
import Button from '@material-ui/core/Button';
import Snackbar from "@material-ui/core/Snackbar"
import Redirect from "react-router-dom/Redirect"

export class LoginPage extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      ID: "",
      password: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    let { ID, password } = this.state;
    this.props.login(ID, password);
    this.setState({
      email: '',
      password: ''
    });
  }




  render() {
    let { ID, password } = this.state;
    let { isLoginPending, isLoginSuccess, loginError, userType } = this.props;
    return (
      <div className="login-page-class">
        <Paper className="loginPaper">
          <div className="loginheaderpart">
            <Typography variant="display3" gutterBottom className="loginpageheader">
              Login
            </Typography>
          </div>
          <p></p>
          <Typography variant="headline" component="h3">
            Login to your account
          </Typography>
          <form onSubmit={this.onSubmit}>
            <div className="loginformgroup">
              <AccountCircle />
              <TextField
                id="outlined-email-input"
                label="YCA ID"
                // type="email"
                name="ID"
                margin="normal"
                variant="outlined"
                onChange={e => this.setState({ ID: e.target.value })}
                value={ID} />



            </div>
            <div className="loginformgroup">
              <Key />
              <TextField
                id="password-input"
                label="Password"
                margin="normal"
                variant="outlined"
                type="password"
                name="password"
                onChange={e => this.setState({ password: e.target.value })}
                value={password} />
            </div>

            <Button type="submit" value="login" variant="raised" color="primary">
              Login
            </Button>
            {isLoginPending && <Snackbar open={true} autoHideDuration={6000} message={<span>Logging you in...</span>} />}
            {/* TODO: find a way to make this conditional on what type of user you are */}
            {isLoginSuccess && userType != null && <Redirect to={userType} />}
            {/* {isLoginSuccess && (userType == "LM") && <Redirect to="/input" />} */}
            {/* {userType == "QA" && <Redirect to="/dashboard" />} */}
            {loginError && <Snackbar open={true} autoHideDuration={6000} message={<span>Login failed: invalid credentials</span>} />}
          </form>



        </Paper>
      </div>
    );
  }

}



const mapStateToProps = (state) => {
  return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.isLoginSuccess,
    loginError: state.loginError,
    userType: state.userType
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (ID, password) => {
      login(ID, password)(dispatch);
    }
  };
}




export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);