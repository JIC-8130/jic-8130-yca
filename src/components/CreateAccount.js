import React from 'react';

import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
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
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import history from '../routers/asgard-history';



export class CreateAccount extends React.Component {

  state = {
    messageopen: false,
    messageInfo: {},
    gender: 'male',
    position: null
  }

  giveSuccessMessage = (message) => {
    let newmsg = {
      message,
      key: new Date().getTime()
    };

    this.setState({
      messageopen: true,
      messageInfo: newmsg

    });
    

  };

  onSubmit = () => {

    this.giveSuccessMessage(' Account Created! Redirecting to Login... ');
   
    // UserDataController.addUser(
    //   {
    //     values: {
    //       YCA_ID: "4444",
    //       FirstName: "Allan",
    //       LastName: "Serna",
    //       Email: "allan.serna@us.yokogawa.com",
    //       UsrType: "LM",
    //       password: "password"
    //     }
    //   }
    // );

    //this.props.startAddLogin(user);

    // this.props.history.push('/');

  };
  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ messageopen: false });
    history.push("/login");
  };

  handlePositionChange = (event) => {

    this.setState({ position: event.target.value });
  };

  render() {

    const { message, key } = this.state.messageInfo;


    return (
      <div className="contact-page-wrapper">


        <Snackbar
          key={key}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.messageopen}
          autoHideDuration={2000}
          onClose={this.handleClose}

          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{message}</span>}
          action={[

            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"

              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
        <Grid container spacing={24} justify="center">
          <Grid item xs={12} md={10} style={{ marginTop: 10 }}>
            <Paper className="contact-page-paper">
              <Typography variant="display1" gutterBottom style={{ padding: 15 }}>
                Account Creation
              </Typography>
              <Grid container spacing={24} >
                <Grid item xs={12} lg={6} md={6} style={{ marginTop: 10 }}>
                  <TextField
                    id="f_name"
                    label="First Name"
                    placeholder="First Name"
                    className="contact-page-name-list-field"
                    margin="normal"
                  />
                </Grid>

                <Grid item xs={12} lg={6} md={6} style={{ marginTop: 10 }}>
                  <TextField
                    id="l_name"
                    label="Last Name"
                    placeholder="Last Name"
                    className="contact-page-name-list-field"
                    margin="normal"
                  />
                </Grid>

                <Grid item xs={12} lg={6} md={6} style={{ marginTop: 10 }}>
                  <TextField
                    id="yca_email"
                    type="email"
                    label="YCA Email"
                    placeholder="YCA Email"
                    className="contact-page-name-list-field"
                    margin="normal"
                  />
                </Grid>


                <Grid item xs={12} lg={6} md={6} style={{ marginTop: 10 }}>
                  <TextField
                    id="yca_id"
                    label="YCA ID#"
                    placeholder="YCA ID#"
                    className="contact-page-name-list-field"
                    margin="normal"
                  />
                </Grid>

                <Grid item xs={12} lg={6} md={6} style={{ marginTop: 10 }}>
                  <TextField
                    id="pw"
                    type="password"
                    label="Password"
                    placeholder="Password"
                    className="contact-page-name-list-field"
                    margin="normal"
                  />
                </Grid>


                <Grid item xs={12} lg={6} md={6} style={{ marginTop: 10 }}>
                  <TextField
                    id="confirm_pw"
                    type="password"
                    label="Confirm Password"
                    placeholder="Confirm Password"
                    className="contact-page-name-list-field"
                    margin="normal"
                  />
                </Grid>


                <Grid item xs={12} style={{ marginTop: 10 }} align="center">
                  <FormControl component="fieldset" required style={{
                    margin: '10px',
                  }}>
                    <FormLabel component="legend">Position</FormLabel>
                    <RadioGroup
                      aria-label="position"
                      name="position1"

                      value={this.state.position}
                      onChange={this.handlePositionChange}
                      style={{
                        margin: `10px 0`,
                      }} className="forms-page-genderclassname">
                      <FormControlLabel value="QA Engineer" control={<Radio />} label="QA Engineer" />
                      <FormControlLabel value="Line Manager" control={<Radio />} label="Line Manager" />
                    </RadioGroup>
                  </FormControl>
                </Grid>

                <Grid item xs={12} lg={12} md={12} style={{ marginTop: 10 }}>
                    <Button type="button" color="primary" variant="raised" onClick={this.onSubmit}>Create</Button>
                </Grid>

              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }


}




export default CreateAccount;
