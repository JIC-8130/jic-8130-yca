import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { Chart, Line } from 'react-chartjs-2';
import history from "../routers/asgard-history";
import { Route } from "react-router-dom";
import Data from "./DataModificationPage"

var producedData = {
    label: "Number of Units Produced",
    data: [25, 16, 15, 17, 20, 13],
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

var safetyData = {
    label: "Number of Safety Incidents",
    data: [2, 0, 0, 0, 1, 0],
    lineTension: 0.3,
    lineTension: 0.3,
    fill: false,
    borderColor: 'red',
    backgroundColor: 'red',
    borderColor: 'red',
    pointBackgroundColor: 'red',
    pointRadius: 5,
    pointHoverRadius: 15,
    pointHitRadius: 30,
    pointBorderWidth: 2,
    pointStyle: 'circle'
};

var workerData = {
    label: "Number of Workers at Line",
    data: [21, 18, 18, 19, 21, 16],
    lineTension: 0.3,
    lineTension: 0.3,
    fill: false,
    borderColor: 'rgba(51, 134, 255, 0.4)',
    backgroundColor: 'rgba(51, 134, 255, 0.4)',
    borderColor: 'rgba(51, 134, 255, 0.4)',
    pointBackgroundColor: 'rgba(51, 134, 255, 1)',
    pointRadius: 5,
    pointHoverRadius: 15,
    pointHitRadius: 30,
    pointBorderWidth: 2,
    pointStyle: 'circle'
};

var overtimeData = {
    label: "Assembly Line Overtime",
    data: [8, 12, 15, 10, 12, 13],
    lineTension: 0.3,
    lineTension: 0.3,
    fill: false,
    borderColor: 'rgba(95, 83, 100, 0.4)',
    backgroundColor: 'rgba(95, 83, 100, 0.4)',
    borderColor: 'rgba(95, 83, 100, 0.4)',
    pointBackgroundColor: 'rgba(95, 83, 100, 1)',
    pointRadius: 5,
    pointHoverRadius: 15,
    pointHitRadius: 30,
    pointBorderWidth: 2,
    pointStyle: 'circle'
};

var downtimeData = {
    label: "Assemly Line Downtime",
    data: [0, 0, 1, 0, 0, 3],
    lineTension: 0.3,
    lineTension: 0.3,
    fill: false,
    borderColor: 'rgba(255, 159, 51, 0.7)',
    backgroundColor: 'rgba(255, 159, 51, 0.7)',
    borderColor: 'rgba(255, 159, 51, 0.7)',
    pointBackgroundColor: 'rgba(255, 159, 51, 1)',
    pointRadius: 5,
    pointHoverRadius: 15,
    pointHitRadius: 30,
    pointBorderWidth: 2,
    pointStyle: 'circle'
};

var productionData = {
    labels: ["10-15-2018", "10-16-2018", "10-17-2018", "10-18-2018", "10-19-2018", "10-20-2018"],
    datasets: [producedData, defectsData, qiData, safetyData, workerData, overtimeData, downtimeData]
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

function extractUnits(data) {
    var retVals = []
    data.forEach(row => {
        retVals.push(row.UnitsProduced);
    });
    return retVals;
}

function extractDefects(data) {
    var retVals = []
    data.forEach(row => {
        retVals.push(row.Defects);
    });
    return retVals;
}

function extractWorkerTotal(data) {
    var retVals = []
    data.forEach(row => {
        retVals.push(row.WorkerTotal);
    });
    return retVals;
}

function extractSInc_Num(data) {
    var retVals = []
    data.forEach(row => {
        retVals.push(row.SInc_Num);
    });
    return retVals;
}

function extractQInc_Num(data) {
    var retVals = []
    data.forEach(row => {
        retVals.push(row.QInc_Num);
    });
    return retVals;
}

function extractOvertime(data) {
    var retVals = []
    data.forEach(row => {
        retVals.push(row.Overtime);
    });
    return retVals;
}

function extractDowntime(data) {
    var retVals = []
    data.forEach(row => {
        retVals.push(row.Downtime);
    });
    return retVals;
}

export class DashboardPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            costCenterSelected: "",
            producedData: {},
            defectsData: {},
            qiData: {},
            safetyData: {},
            workerData: {},
            overtimeData: {},
            downtimeData: {},

            loadingData: false
        }
        this.onViewTableClick = this.onViewTableClick.bind(this);
    }

    componentDidMount() {

        // fetch(`https://asgard-api.azurewebsites.net/costcenters/${this.state.costCenterSelected}`)
        //     .then(response => response.json())
        //     .then(data => this.setState({
        //         producedData: {
        //             labels: ["10-15-2018", "10-16-2018", "10-17-2018", "10-18-2018"],
        //             datasets: [{
        //                 label: "Number of Units Produced",
        //                 data: extractUnits(data),
        //                 lineTension: 0.3,
        //                 fill: false,
        //                 borderColor: 'rgba(51, 255, 107, 0.4)',
        //                 backgroundColor: 'rgba(51, 255, 107, 0.5)',
        //                 pointBorderColor: 'rgba(51, 255, 107, 0.4)',
        //                 pointBackgroundColor: 'rgba(51, 255, 107, 1)',
        //                 pointRadius: 5,
        //                 pointHoverRadius: 15,
        //                 pointHitRadius: 30,
        //                 pointBorderWidth: 2,
        //                 pointStyle: 'circle'
        //             }]
        //             // Set More Options
        //         }
        //     }));
    }

    componentDidUpdate() {
        if (this.state.loadingData) {
            fetch(`https://asgard-api.azurewebsites.net/costcenters/${this.state.costCenterSelected}`)
                .then(response => response.json())
                .then(data => this.setState({
                    producedData: {
                        labels: ["10-15-2018", "10-16-2018", "10-17-2018", "10-18-2018"],
                        datasets:
                            [
                                {
                                    label: "Number of Units Produced",
                                    data: extractUnits(data),
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
                                    pointStyle: 'circle'
                                },

                                {
                                    label: "Number of Defects",
                                    data: extractDefects(data),
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
                                },

                                {
                                    label: "Number of Workers at Line",
                                    data: extractWorkerTotal(data),
                                    lineTension: 0.3,
                                    fill: false,
                                    borderColor: 'rgba(51, 134, 255, 0.4)',
                                    backgroundColor: 'rgba(51, 134, 255, 0.4)',
                                    borderColor: 'rgba(51, 134, 255, 0.4)',
                                    pointBackgroundColor: 'rgba(51, 134, 255, 1)',
                                    pointRadius: 5,
                                    pointHoverRadius: 15,
                                    pointHitRadius: 30,
                                    pointBorderWidth: 2,
                                    pointStyle: 'circle'
                                },

                                {
                                    label: "Number of Safety Incidents",
                                    data: extractSInc_Num(data),
                                    lineTension: 0.3,
                                    fill: false,
                                    borderColor: 'red',
                                    backgroundColor: 'red',
                                    borderColor: 'red',
                                    pointBackgroundColor: 'red',
                                    pointRadius: 5,
                                    pointHoverRadius: 15,
                                    pointHitRadius: 30,
                                    pointBorderWidth: 2,
                                    pointStyle: 'circle'
                                },

                                {
                                    label: "Number of Quality Incidents",
                                    data: extractQInc_Num(data),
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
                                },

                                {
                                    label: "Assembly Line Overtime",
                                    data: extractOvertime(data),
                                    lineTension: 0.3,
                                    fill: false,
                                    borderColor: 'rgba(95, 83, 100, 0.4)',
                                    backgroundColor: 'rgba(95, 83, 100, 0.4)',
                                    borderColor: 'rgba(95, 83, 100, 0.4)',
                                    pointBackgroundColor: 'rgba(95, 83, 100, 1)',
                                    pointRadius: 5,
                                    pointHoverRadius: 15,
                                    pointHitRadius: 30,
                                    pointBorderWidth: 2,
                                    pointStyle: 'circle'
                                },

                                {
                                    label: "Assembly Line Downtime",
                                    data: extractDowntime(data),
                                    lineTension: 0.3,
                                    fill: false,
                                    borderColor: 'rgba(255, 159, 51, 0.7)',
                                    backgroundColor: 'rgba(255, 159, 51, 0.7)',
                                    borderColor: 'rgba(255, 159, 51, 0.7)',
                                    pointBackgroundColor: 'rgba(255, 159, 51, 1)',
                                    pointRadius: 5,
                                    pointHoverRadius: 15,
                                    pointHitRadius: 30,
                                    pointBorderWidth: 2,
                                    pointStyle: 'circle'
                                }

                            ]
                        // Set More Options
                    },
                    loadingData: false
                }));
        }
    }

    render() {
        console.log("RENDER CALLED\nCURRENT COST CENTER: " + this.state.costCenterSelected);
        const chartData = (canvas) => {
            const ctx = canvas.getContext("2d")
            const myChart = new Chart(ctx, {
                type: 'line',
                // data: productionData,
                data: this.state.producedData,
                options: chartOptions
            });
            return {
                myChart
            }
        }



        return (
            <React.Fragment>
                <Grid container>
                    <Grid item xs={12} style={{ marginTop: 5 }}>
                        <Paper className="homepagepaper">
                            <Typography variant="display3" gutterBottom align="center">
                                Welcome
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} style={{ marginTop: 35 }}>
                        <Typography variant="title" gutterBottom align="center">
                            Cost Centers
                        </Typography>
                    </Grid>

                    <Grid item xs={3} style={{ marginLeft: 45 }}>
                        <Typography variant="subheading" gutterBottom align="left">
                            <ul>
                                <li><Button variant="text" onClick={() => { this.setState({ costCenterSelected: "CC6212", loadingData: true }) }}> 6212 YDC Receiving </Button></li>
                                <li><Button variant="text" onClick={() => { this.setState({ costCenterSelected: "CC6213", loadingData: true }) }}> 6213 YDC Stores </Button></li>
                                <li><Button variant="text" onClick={() => { this.setState({ costCenterSelected: "CC6234", loadingData: true }) }}> 6234 YC Shipping </Button></li>
                                <li><Button variant="text" onClick={() => { this.setState({ costCenterSelected: "CC6322", loadingData: true }) }}> 6322 Parts & Repair </Button></li>
                                <li><Button variant="text" onClick={() => { this.setState({ costCenterSelected: "CC6401", loadingData: true }) }}> 6401 Parts & Manufacturing </Button></li>
                            </ul>
                        </Typography>
                    </Grid>

                    <Grid item xs={3}>
                        <Typography variant="subheading" gutterBottom align="left">
                            <ul>
                                <li><Button variant="text" onClick={() => { this.setState({ costCenterSelected: "CC6422", loadingData: true }) }}> 6422 Machine Shop </Button></li>
                                <li><Button variant="text" onClick={() => { this.setState({ costCenterSelected: "CC6511", loadingData: true }) }}> 6511 SMT </Button></li>
                                <li><Button variant="text" onClick={() => { this.setState({ costCenterSelected: "CC6521", loadingData: true }) }}> 6521 Meter Assembly </Button></li>
                                <li><Button variant="text" onClick={() => { this.setState({ costCenterSelected: "CC6522", loadingData: true }) }}> 6522 Analytical Manufacturing </Button></li>
                                <li><Button variant="text" onClick={() => { this.setState({ costCenterSelected: "CC6526", loadingData: true }) }}> 6526 Transmitter Manufacturing </Button></li>
                            </ul>
                        </Typography>
                    </Grid>

                    <Grid item xs={3}>
                        <Typography variant="subheading" gutterBottom align="left">
                            <ul>
                                <li><Button variant="text" onClick={() => { this.setState({ costCenterSelected: "CC6533", loadingData: true }) }}> 6533 Yewflo Manufacturing </Button></li>
                                <li><Button variant="text" onClick={() => { this.setState({ costCenterSelected: "CC6534", loadingData: true }) }}> 6534 Loop Indicator </Button></li>
                                <li><Button variant="text" onClick={() => { this.setState({ costCenterSelected: "CC6542", loadingData: true }) }}> 6542 Newnan TDLS </Button></li>
                                <li><Button variant="text" onClick={() => { this.setState({ costCenterSelected: "CC6915", loadingData: true }) }}> 6915 Production Control </Button></li>
                                <li><Button variant="text" onClick={() => { this.setState({ costCenterSelected: "CC6931", loadingData: true }) }}> 6931 Manufacturing QA </Button></li>
                            </ul>
                        </Typography>
                    </Grid>

                    <Grid item xs={2}>
                        <Typography variant="subheading" gutterBottom align="left">
                            <ul>
                                <li><Button variant="text" onClick={() => { this.setState({ costCenterSelected: "CC6951", loadingData: true }) }}> 6951 Mod Line </Button></li>
                                <li><Button variant="text" onClick={() => { this.setState({ costCenterSelected: "CC6955", loadingData: true }) }}> 6955 Cal Lab </Button></li>
                                <li><Button variant="text" onClick={() => { this.setState({ costCenterSelected: "CC6956", loadingData: true }) }}> 6956 Cal Lab </Button></li>
                                <li><Button variant="text" onClick={() => { this.setState({ costCenterSelected: "CC6957", loadingData: true }) }}> 6957 Cal Lab </Button></li>
                                <li><Button variant="text" onClick={() => { this.setState({ costCenterSelected: "CC8501", loadingData: true }) }}> 8501 R&D </Button></li>
                            </ul>
                        </Typography>
                    </Grid>

                    <Grid item xs={12} style={{ marginTop: 25, marginBottom: 10 }}>
                        <Typography variant="title" gutterBottom align="center">
                            Data Visualization
                        </Typography>
                    </Grid>

                    <Grid item xs={12} style={{ marginLeft: 15 }}>
                        < div id="chart" >
                            <Line data={chartData} />
                        </div >
                    </Grid>


                    <Grid item xs={12} align="right" style={{ marginTop: 15 }}>
                        <Button color="primary" variant="raised" size="large" style={{ marginRight: 15 }}>
                            Generate Report
                        </Button>
                        <Button color="primary" variant="outlined" style={{ marginRight: 20 }} onClick={this.onViewTableClick}>
                            View Table
                        </Button>
                    </Grid>
                </Grid>
            </React.Fragment >

        );

    }

    onViewTableClick() {
        console.log(this.state.costCenterSelected);
        // And now we call our magical push function!
        history.push("/data", { costCenter: this.state.costCenterSelected });

    }
}

export default DashboardPage;