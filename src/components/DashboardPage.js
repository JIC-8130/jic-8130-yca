import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { Chart, Line } from 'react-chartjs-2';
import history from "../routers/asgard-history";
import { Route } from "react-router-dom";
import Data from "./DataModificationPage";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

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

function extractDates(data) {
    var retVals = [];
    data.forEach(row => {
        retVals.push(row.InputDate);
    });
    return retVals;
}

function extractUnits(data) {
    var retVals = [];
    data.forEach(row => {
        retVals.push(row.UnitsProduced);
    });
    return retVals;
}

function extractDefects(data) {
    var retVals = [];
    data.forEach(row => {
        retVals.push(row.Defects);
    });
    return retVals;
}

function extractWorkerTotal(data) {
    var retVals = [];
    data.forEach(row => {
        retVals.push(row.WorkerTotal);
    });
    return retVals;
}

function extractSInc_Num(data) {
    var retVals = [];
    data.forEach(row => {
        retVals.push(row.SInc_Num);
    });
    return retVals;
}

function extractQInc_Num(data) {
    var retVals = [];
    data.forEach(row => {
        retVals.push(row.QInc_Num);
    });
    return retVals;
}

function extractOvertime(data) {
    var retVals = [];
    data.forEach(row => {
        retVals.push(row.Overtime);
    });
    return retVals;
}

function extractDowntime(data) {
    var retVals = [];
    data.forEach(row => {
        retVals.push(row.Downtime);
    });
    return retVals;
}

// New extract function for first analytic
function extractMhProd(data) {
    var retVals = [];
    data.forEach(row => {
        retVals.push(row.mhProd);
    });
    return retVals;
}

export class DashboardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            costCenterSelected: "CC6212", //FIXME: change this to be a different default cost center
            costCenterData: {},

            loadingData: false,
        }
        this.onViewTableClick = this.onViewTableClick.bind(this);
        this.printDocument = this.printDocument.bind(this);
    }

    printDocument() {
        const graph = document.getElementById('chart');
        html2canvas(graph)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.setFontSize(29);
                pdf.setFont("courier");
                pdf.text("QA Engineer Report for " + this.state.costCenterSelected, 15, 17);


                // pdf.setFont("times");
                // pdf.setFontType("italic");
                // pdf.text(20, 90, 'This is times italic.');

                // pdf.setFont("helvetica");
                // pdf.setFontType("bold");
                // pdf.text(20, 110, 'This is helvetica bold.');

                // pdf.setFont("courier");
                // pdf.setFontType("bolditalic");
                // pdf.text(20, 120, 'This is courier bolditalic.');

                pdf.addImage(imgData, 'PNG', 6, 27, 200, 110); //bot: 189
                pdf.rect(3, 25, 205, 115); // chart border
                pdf.rect(3, 3, 205, 290); // border
                pdf.save(this.state.costCenterSelected + '.pdf');
            });
    }

    componentDidMount() {
        fetch(`https://asgard-api.azurewebsites.net/costcenters/${this.state.costCenterSelected}`)
            .then(response => response.json())
            .then(data => this.setState({
                costCenterData: {
                    labels: extractDates(data),
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
                            },

                            {
                                label: "Manhour Productivity",
                                data: extractMhProd(data),
                                lineTension: 0.3,
                                fill: false,
                                borderColor: 'rgba(148,0,211, 0.7)',
                                backgroundColor: 'rgba(148,0,211, 0.7)',
                                borderColor: 'rgba(2148,0,211, 0.7)',
                                pointBackgroundColor: 'rgba(148,0,211, 1)',
                                pointRadius: 5,
                                pointHoverRadius: 15,
                                pointHitRadius: 30,
                                pointBorderWidth: 2,
                                pointStyle: 'circle'
                            }

                        ]
                    // Set More Options
                },
                loadingData: false,
            }));
    }

    componentDidUpdate() {


        if (this.state.loadingData) {
            fetch(`https://asgard-api.azurewebsites.net/costcenters/${this.state.costCenterSelected}`)
                .then(response => response.json())
                .then(data => this.setState({
                    costCenterData: {
                        labels: extractDates(data),
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
                                },

                                {
                                    label: "Manhour Productivity",
                                    data: extractMhProd(data),
                                    lineTension: 0.3,
                                    fill: false,
                                    borderColor: 'rgba(148,0,211, 0.7)',
                                    backgroundColor: 'rgba(148,0,211, 0.7)',
                                    borderColor: 'rgba(148,0,211, 0.7)',
                                    pointBackgroundColor: 'rgba(148,0,211, 1)',
                                    pointRadius: 5,
                                    pointHoverRadius: 15,
                                    pointHitRadius: 30,
                                    pointBorderWidth: 2,
                                    pointStyle: 'circle'
                                }

                            ]
                        // Set More Options
                    },
                    loadingData: false,
                }));
        }
    }

    render() {
        console.log("RENDER CALLED\nCURRENT COST CENTER: " + this.state.costCenterSelected);

        return (
            <React.Fragment>
                <Grid container>
                    <Grid item xs={12} style={{ marginTop: 5 }}>
                        <Paper className="homepagepaper">
                            <Typography variant="display3" gutterBottom align="center">
                                QA Dashboard
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
                            Data for {this.state.costCenterSelected}
                        </Typography>
                    </Grid>

                    <Grid item xs={12} style={{ marginLeft: 15 }}>
                        < div id="chart" >
                            <Line data={this.state.costCenterData} options={chartOptions} />
                        </div >
                    </Grid>


                    <Grid item xs={12} align="right" style={{ marginTop: 35, paddingBottom: 40 }}>
                        <Button color="primary" variant="raised" size="large" style={{ marginRight: 15 }} onClick={this.printDocument}>
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