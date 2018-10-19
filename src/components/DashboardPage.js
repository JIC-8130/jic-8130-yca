import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Key from '@material-ui/icons/VpnKey';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import fusioncharts from 'fusioncharts';
// Load the charts module
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';

import ReactChartkick, { LineChart} from 'react-chartkick'
import Chart from 'chart.js'

//const CHART = document.getElementById("lineChart");
//console.log("chart" + CHART); //null

var producedData = {
    label: "Number of Units Produced",
    data: [120, 80, 75, 94, 103, 67],
    lineTension: 0.3,
    fill: false,
    borderColor: 'rgba(51, 255, 107, 0.4)',
    backgroundColor: 'rgba(51, 255, 107, 0.5)',
    pointBorderColor: 'rgba(51, 255, 107, 0.4)',
    pointBackgroundColor: 'rgba(51, 255, 107, 1)',
    pointRadius: 5,
    pointHoverRadius: 15,
    pointHitRadius: 30,
    pointBorderWidth: 2,
    pointStyle: 'circle',
    // Set More Options
  };
     
  var defectsData = {
    label: "Number of Defects",
    data: [10, 5, 11, 2, 6, 4],
    lineTension: 0.3,
    lineTension: 0.3,
    fill: false,
    borderColor: 'rgba(199, 0, 57, 0.4)',
    backgroundColor: 'rgba(199, 0, 57, 0.4)',
    borderColor: 'rgba(199, 0, 57, 0.4)',
    pointBackgroundColor: 'rgba(199, 0, 57, 1)',
    pointRadius: 5,
    pointHoverRadius: 15,
    pointHitRadius: 30,
    pointBorderWidth: 2,
    pointStyle: 'circle'
  };

  var qiData = {
    label: "Number of Quality Incidents",
    data: [15, 10, 17, 7, 2, 11],
    lineTension: 0.3,
    lineTension: 0.3,
    fill: false,
    borderColor: 'rgba(255, 195, 0, 0.4)',
    backgroundColor: 'rgba(255, 195, 0, 0.4)',
    pointBorderColor: 'rgba(255, 195, 0, 0.4)',
    pointBackgroundColor: 'rgba(255, 195, 0, 1)',
    pointRadius: 5,
    pointHoverRadius: 15,
    pointHitRadius: 30,
    pointBorderWidth: 2,
    pointStyle: 'circle'
  };
     
  var productionData = {
    labels: ["10-15-2018", "10-16-2018", "10-17-2018", "10-18-2018", "10-19-2018", "10-20-2018"],
    datasets: [producedData, defectsData, qiData]
  };

  var chartOptions = {
    legend: {
      display: true,
      position: 'top',
      labels: {
        boxWidth: 80,
        fontColor: 'black'
      }
    }
  };

var ctx = document.getElementById("lineChart");
var myChart = new Chart(ctx, {
    type: 'line',
    data: productionData,
    options: chartOptions
});

const HomePage = () => (
    <React.Fragment>
        <Grid container spacing={24}>
            <Grid item xs={12} style={{marginTop:5}}>
                <Paper className="homepagepaper">
                    <Typography variant="display3" gutterBottom align="center">
                        Welcome
                    </Typography>
                </Paper>

            </Grid>
            
            <Grid item xs={12}>
                <Typography variant="title" gutterBottom align="center">
                    Cost Centers
                </Typography>
            </Grid>

            <Grid item xs={3} style={{marginLeft:45}}>
                <Typography variant="subheading" gutterBottom align="left">
                    <ul>
                        <li><a href="#"> 6212 YDC Receiving </a></li>
                        <li><a href="#"> 6213 YDC Stores </a></li>
                        <li><a href="#"> 6234 YC Shipping </a></li>
                        <li><a href="#"> 6322 Parts & Repair </a></li>
                        <li><a href="#"> 6401 Parts & Manufacturing </a></li>
                    </ul>
                </Typography>
            </Grid>

            <Grid item xs={3}>
                <Typography variant="subheading" gutterBottom align="left">
                    <ul>
                        <li><a href="#"> 6422 Machine Shop </a></li>
                        <li><a href="#"> 6511 SMT </a></li>
                        <li><a href="#"> 6521 Meter Assembly </a></li>
                        <li><a href="#"> 6522 Analytical Manufacturing </a></li>
                        <li><a href="#"> 6526 Transmitter Manufacturing </a></li>
                        </ul>
                </Typography>
            </Grid>
                        
            <Grid item xs={3}>
                <Typography variant="subheading" gutterBottom align="left">
                    <ul>
                        <li><a href="#"> 6533 Yewflo Manufacturing </a></li>
                        <li><a href="#"> 6534 Loop Indicator </a></li>
                        <li><a href="#"> 6542 Newnan TDLS </a></li>
                        <li><a href="#"> 6915 Production Control </a></li>
                        <li><a href="#"> 6931 Manufacturing QA </a></li>
                        </ul>
                </Typography>
            </Grid>
                       
            <Grid item xs={2}>
                <Typography variant="subheading" gutterBottom align="left">
                    <ul>
                        <li><a href="#"> 6951 Mod Line </a></li>
                        <li><a href="#"> 6955 Cal Lab </a></li>
                        <li><a href="#"> 6956 Cal Lab </a></li>
                        <li><a href="#"> 6957 Cal Lab </a></li>
                        <li><a href="#"> 8501 R&D </a></li>
                        </ul>
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <Typography variant="title" gutterBottom align="center">
                    Data Visualizations
                </Typography>
            </Grid>

            <Grid item xs={5} style={{marginLeft:20}}>

            </Grid>
            <Grid item xs={5}>
                {/* chart1 */}
            </Grid>

            <Grid item xs={12} align="right">
                <Button color="primary" variant="raised" size="large">
                    Generate Report
                </Button>
                <Button color="primary" variant="outlined" style={{marginLeft:10}}>
                    Edit Data
                </Button>
            </Grid>
        </Grid>
    </React.Fragment>
);

export default HomePage;

HomePage();