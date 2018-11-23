import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Image from 'material-ui-image';
import bulb from '../assets/img/yokogawa-logo.png';
import { Link } from 'react-router-dom';
import theme from '../theme/theme.js';

const LandingPage = () => (
    <div className="landingPagebodyComponent">

        <div className="showcase">
            <u><Typography color="secondary" variant="display4" gutterBottom align="center" style={{ color: 'white', fontSize: '175px' }}>
                ASGARD
            </Typography></u>
        </div>

        <div className="bio">
            <Grid container justify="center" alignContent="center" alignItems="center">
                <Grid item xs={12} md={12}>
                    <Typography variant="display1" gutterBottom align="center" style={{ color: 'white', fontSize: '50px' }}>
                        Assembly Statistics Gatherer and Recorder
                    </Typography>
                </Grid>

                <Grid container item xs={6} justify="center" alignContent="center" alignItems="center" direction="column">
                    {/* <Typography gutterBottom align="center" style={{ paddingLeft: 20, color: 'white', border: '#fff 3px double' }}>
                    {`
                        The Assembly Statistics Gatherer and Recorder application, better known as ASGARD, was developed by four Georgia Tech students in 2018. Their mission was to assist Yokogawa and tackle an efficiency problem within the company. 
                        Therefore, the core functionality of their application can be seperated into 2 parts: data gathering and data reporting.           
                    `}
                </Typography> */}

                    <Typography variant="headline" gutterBottom align="center" style={{ fontSize: '23px', color: 'white' }}>
                        {` Get started by creating an account or if you already have an account please login `}
                    </Typography>

                    <Link to="/create-account">
                        <Button color="primary" variant="raised" align="left" style={{ fontSize: '15px', marginTop: '40px', color: 'white' }}>
                            Create Account
                        </Button>
                    </Link>

                    {/* <Link to="/login">
                        <Button color="primary" variant="raised" align="left" style={{ fontSize: '15px', marginTop: '40px', color: 'white' }}>
                            Login
                    </Button>
                    </Link> */}
                </Grid>
            </Grid>
        </div>


    </div >
);

export default LandingPage;
