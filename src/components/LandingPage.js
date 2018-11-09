import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Image from 'material-ui-image';
import bulb from '../assets/img/yokogawa-logo.png';
import { Link } from 'react-router-dom';

const LandingPage = () => (
    <div className="landingPagebodyComponent">

        <Typography variant="display3" gutterBottom align="center">
            Welcome to ASGARD
      </Typography>

        <Grid container justify="center" alignContent="center" alignItems="center">
            <Grid item xs={12} md={12}>
                <Typography variant="body2" gutterBottom align="center">
                    Welcome to ASGARD, YCA's cost center data collection tool!
          </Typography>
            </Grid>
            <Grid container item xs={6} justify="center" alignContent="center" alignItems="center" direction="column">
                <Typography gutterBottom align="center" style={{ paddingLeft: 20 }}>
                    {`
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet
            `}
                </Typography>
                <Link to="/start">
                    <Button color="primary" align="left" style={{ marginLeft: 20 }}>
                        Get Started
            </Button>
                </Link>

                <Button color="primary" align="left" style={{ marginLeft: 20 }}>
                    Know More
          </Button>
            </Grid>
        </Grid>
        <Grid item xs={8}>
            <Image
                src={bulb}
                color="inherit" style={{ height: 40 }} imageStyle={{ width: '30', height: '30' }} />
        </Grid>


    </div>
);

export default LandingPage;
