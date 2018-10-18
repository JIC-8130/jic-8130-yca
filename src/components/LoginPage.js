import React from 'react';
import { connect } from 'react-redux';
import { login, setUsername } from '../store/actions/auth';
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

export class LoginPage extends React.Component {

  constructor(props) {


    super(props);
    console.log('inside login component ', this.props);

  }

  OnClickLogin = () => {
    const { username } = this.props
    console.log('username from redux props', username)
    // this.props.startLogin(username);
    // this.props.history.push('/home');

  };

  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    //console.log("In change handler of login page.");
    //console.log(e);
    console.log('value', value);
    // this.setState({
    //   [name]: value,
    // });
    const { onSetUsername } = this.props
    onSetUsername(value)
    // if (e.target.value === 'username') {
    //   username: e.target.value;
    // }

  }

  render() {
    console.log('username', this.props.username)
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
          <form>
            <div className="loginformgroup">

              <AccountCircle />

              {/* <TextField id="input-username" label="username" onChange={this.handleChange} /> */}
              <input id="input-username" label="username" onChange={this.handleChange} value={this.props.username} />

            </div>
            <div className="loginformgroup">

              <Key />

              <TextField type="password" id="input-password" label="Password" />

            </div>
          </form>

          <Button variant="raised" color="primary" onClick={this.OnClickLogin}><Typography variant="button" gutterBottom className="logintypography">
            Login
      </Typography></Button>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  const { auth: { username } } = state

  return { username }
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: (userid) => dispatch(login(userid)),
  onSetUsername: (username) => dispatch(setUsername(username)),
});


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);