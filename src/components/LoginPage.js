import React from 'react';
import { connect } from 'react-redux';
// import { login, setUsername } from '../store/actions/auth';
import { login } from "../redux/auth-reducer"
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Key from '@material-ui/icons/VpnKey';
import Button from '@material-ui/core/Button';
import Snackbar from "@material-ui/core/Snackbar"

export class LoginPage extends React.Component {
  // Maddy's code
  // constructor(props) {
  //   super(props);
  //   console.log('inside login component ', this.props);
  // }


  constructor(props) {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
    // this.yeet = this.yeet.bind(this)
  }

  // Maddy's code
  // OnClickLogin = () => {
  //   const { username } = this.props
  //   console.log('username from redux props', username)
  //   // this.props.startLogin(username);
  //   // this.props.history.push('/home');

  // };

  // handleChange = (e) => {
  //   const target = e.target;
  //   const value = target.value;
  //   //console.log("In change handler of login page.");
  //   //console.log(e);
  //   console.log('value', value);
  //   // this.setState({
  //   //   [name]: value,
  //   // });
  //   const { onSetUsername } = this.props
  //   onSetUsername(value)
  //   // if (e.target.value === 'username') {
  //   //   username: e.target.value;
  //   // }

  // }
  onSubmit(e) {
    e.preventDefault();
    let { email, password } = this.state;
    this.props.login(email, password);
    this.setState({
      email: '',
      password: ''
    });
  }



  render() {
    // console.log('username', this.props.username)
    let {email, password} = this.state;
    let {isLoginPending, isLoginSuccess, loginError} = this.props;
    return (
      <div className="login-page-class">
        <Paper className="loginPaper">
          <div className="loginheaderpart">
            <Typography variant="display3" gutterBottom className="loginpageheader">
              Login
            </Typography>
          </div>
          <Typography variant="headline" component="h3">
            Login to your account
          </Typography>
          <form onSubmit={this.onSubmit}>
            <div className="loginformgroup">
              <AccountCircle />
              {/* <TextField id="input-username" label="username" onChange={this.handleChange} /> */}
              {/* <TextField id="input-username" label="username" onChange={this.handleChange} value={this.props.username} /> */}
              <TextField 
                id="outlined-email-input"
                label="Email"
                type="email"
                name="email"
                autoComplete="email"
                margin="normal"
                variant="outlined"
                onChange={e => this.setState({email: e.target.value})}
                value={email}/>



            </div>
            <div className="loginformgroup">
              <Key />
              {/* <TextField type="password" id="input-password" label="Password" /> */}
              <TextField
                id="password-input"
                label="Password"
                margin="normal"
                variant="outlined"
                type="password"
                name="password"
                onChange={e => this.setState({password: e.target.value})}
                value={password}/>
            </div>

            <Button type="submit" value="login" variant="raised" color="primary">
                Login
            </Button>

            { isLoginPending && <Snackbar open={true} autoHideDuration={6000} message={<span>Logging you in...</span>} />}
            { isLoginSuccess && <Snackbar open={true} autoHideDuration={4000} message={<span>Login successful!</span>} />}
            { loginError && <Snackbar open={true} autoHideDuration={6000} message={<span>Login failed: invalid credentials</span>} />}
          </form>



        </Paper>
      </div>
    );
  }





}

//Maddy's code
// const mapStateToProps = (state) => {

//   const { auth: { username } } = state

//   return { username }
// }

// const mapDispatchToProps = (dispatch) => ({
//   startLogin: (userid) => dispatch(login(userid)),
//   onSetUsername: (username) => dispatch(setUsername(username)),
// });




const mapStateToProps = (state) => {
  return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.isLoginSuccess,
    loginError: state.loginError
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => {
      login(email, password)(dispatch);
    }
  };
}




export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);