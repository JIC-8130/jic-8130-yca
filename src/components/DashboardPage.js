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

// Pass fusioncharts as a dependency of charts

charts(FusionCharts)

var chartConfigs = {
  
    type: "Column2D",
   width:"80%",height:400,
    className: "fc-column2d", // ReactJS attribute-name for DOM classes 1
    dataFormat: "JSON",
    dataSource: {
        chart:{ caption:"Harry's SuperMart",subCaption:"Top 5 stores in last month by revenue",numberPrefix:"$", theme: "zune",
        palettecolors: "#0075c2"},
        data: [{label:"Bakersfield Central",value:"880000"},{label:"Garden Groove harbour",value:"730000"},{label:"Los Angeles Topanga",value:"590000"},{label:"Compton-Rancho Dom",value:"520000"},{label:"Daly City Serramonte",value:"330000"}]
    }
};

var pieChartConfig={

type:"Pie3d",
width:"80%",
height:"400",
className:'fc-pie3d',
dataFormat:"JSON",
dataSource:
  {
    chart: {
        caption: "Sales Per Employee for 2014",
        "palette": "2",
        "animation": "1",
        "formatnumberscale": "1",
        "decimals": "0",
        "numberprefix": "$",
        "pieslicedepth": "30",
        "startingangle": "125",
        "showborder": "0"
    },
    "data": [
        {
            "label": "Leverling",
            "value": "100524",
            "issliced": "1"
        },
        {
            "label": "Fuller",
            "value": "87790",
            "issliced": "1"
        },
        {
            "label": "Davolio",
            "value": "81898",
            "issliced": "0"
        },
        {
            "label": "Peacock",
            "value": "76438",
            "issliced": "0"
        },
        {
            "label": "King",
            "value": "57430",
            "issliced": "0"
        },
        {
            "label": "Callahan",
            "value": "55091",
            "issliced": "0"
        },
        {
            "label": "Dodsworth",
            "value": "43962",
            "issliced": "0"
        },
        {
            "label": "Suyama",
            "value": "22474",
            "issliced": "0"
        },
        {
            "label": "Buchanan",
            "value": "21637",
            "issliced": "0"
        }
    ]
}


};


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
                <ReactFC {...chartConfigs} />
            </Grid>
            <Grid item xs={5}>
                <ReactFC {...pieChartConfig}/>
            </Grid>

            <Grid item xs={12} align="right">
                <Button color="primary">
                    Generate Report
                </Button>
                <Button color="primary">
                    Edit Data
                </Button>
            </Grid>
        </Grid>
    </React.Fragment>
);

export default HomePage;