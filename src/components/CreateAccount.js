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
import fetch from "node-fetch";
import regeneratorRuntime from "regenerator-runtime";
import bodyConstructor from "../services/bodyConstructor";



export class CreateAccount extends React.Component {

  /**
   * This is our state object. We use messageopen 
   * and messageinfo to manage the SnackBar we create when the user is created.
   * The "values" object contains the values from each field in the form.
   * This object is then passed to the API to be turned into a new user!
   */
  state = {
    messageopen: false,
    messageInfo: {},
    values: {
      YCA_ID: "",
      FirstName: "",
      LastName: "",
      Email: "",
      UsrType: "",
      password: "",
    }

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
    // alert(JSON.stringify(this.state.values));
    // let formBody = [];
    // for (let property in this.state.values) {
    //   let encodedKey = encodeURIComponent(property);
    //   let encodedValue = encodeURIComponent(this.state.values[property]);
    //   formBody.push(encodedKey + "=" + encodedValue);
    // }
    // formBody = formBody.join("&");
    var reqBody = bodyConstructor.createBody(this.state.values);
    async function newUserFetch(vals, component) {
      const response = fetch(`https://asgard-api.azurewebsites.net/users/new-user`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "no-cors", // no-cors, cors, *same-origin
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
          "Access-Control-Allow-Headers": "Origin, X-Requested-With, contentType, Content-Type, Accept, Authorization",
          "X-Powered-By": "Express"

        },
        redirect: "follow", // manual, *follow, error
        body: reqBody, // body data type must match "Content-Type" header
      }).then(
        component.giveSuccessMessage(' Account Created! Redirecting to Login... ')
      );
    }
    newUserFetch(this.state.values, this);
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ messageopen: false });
    history.push("/login");
  };

  handleFirstNameChange = (event) => {
    this.setState({ firstName: event.target.value });
  };

  handlePositionChange = (event) => {
    this.setState({
      messageopen: this.state.messageopen,
      messageInfo: this.state.messageInfo,
      values: {
        YCA_ID: this.state.values.YCA_ID,
        FirstName: this.state.values.FirstName,
        LastName: this.state.values.LastName,
        Email: this.state.values.Email,
        UsrType: event.target.value,
        password: this.state.values.password,
      }
    });
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
                    onChange={e => this.setState({
                      messageopen: this.state.messageopen,
                      messageInfo: this.state.messageInfo,
                      values: {
                        YCA_ID: this.state.values.YCA_ID,
                        FirstName: e.target.value,
                        LastName: this.state.values.LastName,
                        Email: this.state.values.Email,
                        UsrType: this.state.values.UsrType,
                        password: this.state.values.password,
                      }
                    }

                    )}
                  />
                </Grid>

                <Grid item xs={12} lg={6} md={6} style={{ marginTop: 10 }}>
                  <TextField
                    id="l_name"
                    label="Last Name"
                    placeholder="Last Name"
                    className="contact-page-name-list-field"
                    margin="normal"
                    onChange={e => this.setState({
                      messageopen: this.state.messageopen,
                      messageInfo: this.state.messageInfo,
                      values: {
                        YCA_ID: this.state.values.YCA_ID,
                        FirstName: this.state.values.FirstName,
                        LastName: e.target.value,
                        Email: this.state.values.Email,
                        UsrType: this.state.values.UsrType,
                        password: this.state.values.password,
                      }
                    }
                    )}
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
                    onChange={e => this.setState({
                      messageopen: this.state.messageopen,
                      messageInfo: this.state.messageInfo,
                      values: {
                        YCA_ID: this.state.values.YCA_ID,
                        FirstName: this.state.values.FirstName,
                        LastName: this.state.values.LastName,
                        Email: e.target.value,
                        UsrType: this.state.values.UsrType,
                        password: this.state.values.password,
                      }
                    }
                    )}
                  />
                </Grid>


                <Grid item xs={12} lg={6} md={6} style={{ marginTop: 10 }}>
                  <TextField
                    id="yca_id"
                    label="YCA ID#"
                    placeholder="YCA ID#"
                    className="contact-page-name-list-field"
                    margin="normal"
                    onChange={e => this.setState({
                      messageopen: this.state.messageopen,
                      messageInfo: this.state.messageInfo,
                      values: {
                        YCA_ID: e.target.value,
                        FirstName: this.state.values.FirstName,
                        LastName: this.state.values.LastName,
                        Email: this.state.values.Email,
                        UsrType: this.state.values.UsrType,
                        password: this.state.values.password,
                      }
                    }
                    )}
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
                    onChange={e => this.setState({
                      messageopen: this.state.messageopen,
                      messageInfo: this.state.messageInfo,
                      values: {
                        YCA_ID: this.state.values.YCA_ID,
                        FirstName: this.state.values.FirstName,
                        LastName: this.state.values.LastName,
                        Email: this.state.values.Email,
                        UsrType: this.state.values.UsrType,
                        password: e.target.value,
                      }
                    }
                    )}
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

                      value={this.state.values.UsrType}
                      onChange={this.handlePositionChange}
                      style={{
                        margin: `10px 0`,
                      }} className="forms-page-genderclassname">
                      <FormControlLabel value="QA" control={<Radio />} label="QA Engineer" />
                      <FormControlLabel value="LM" control={<Radio />} label="Line Manager" />
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
