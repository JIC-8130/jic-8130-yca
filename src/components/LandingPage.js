import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Image from 'material-ui-image';
import bulb from '../assets/img/yokogawa-logo.png';
import {Link} from 'react-router-dom';

const LandingPage = () => (
  <div className="landingPagebodyComponent">
      <Typography variant="display3" gutterBottom align="center">
          Welcome to ASGARD
      </Typography>

      <Grid container spacing={24} justify="center" alignContent="center" alignItems="center">
          <Grid item xs={12} md={12}>
              <Typography variant="body2" gutterBottom align="center">
                  YCA's Cost Center Data Collection Tool
              </Typography>
          </Grid>

          <Grid container item xs={6} justify="center" alignContent="center" alignItems="center" direction="column">
              <Typography gutterBottom align="center" style={{paddingLeft:20}}>
              {`
                  The application we have designed is called ASGARD, which stands for Assembly Statistics Gatherer and Recorder. The core functionality of our application is broken down into 2 parts: data gathering and data reporting.            `}
              </Typography>

              <p></p>

              <Typography variant="body2" gutterBottom align="center" style={{paddingLeft:20}}>
                  {`Get started by creating an account.   `}
              </Typography>

              <Link to="/createacc">
                  <Button color="primary"  align="left" style={{marginLeft:20}}>
                      Create Account
                  </Button>
              </Link>

              {/* <Link to ="/">
                  <Button color="primary"  align="left" style={{marginLeft:20}}>
                      Know More
                  </Button>
              </Link> */}
          </Grid>
      </Grid>

      <Grid item xs={8}>
          <Image
              src={bulb}
              color="inherit" style={{height:40}} imageStyle={{ width: '30', height: '30' }} />
      </Grid>


  </div>
);

export default LandingPage;
