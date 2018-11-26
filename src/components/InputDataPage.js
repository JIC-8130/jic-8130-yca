import React from 'react';

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
import bodyConstructor from "../services/bodyConstructor";
import regeneratorRuntime from "regenerator-runtime";

export class InputDataPage extends React.Component {

    state = {
        messageopen: false,
        messageInfo: {},
        values: {
            InputDate: "2018-10-10",
            UnitsProduced: "",
            Defects: "",
            WorkerTotal: "",
            SInc_Num: "",
            QInc_Num: "",
            SInc_Reason: "",
            QInc_Reason: "",
            HighUtil: "",
            LoUtil: "",
            Overtime: "",
            Downtime: "",
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
        console.log(this.state.values);
        var reqBody = bodyConstructor.createBody(this.state.values);
        async function addEntryToCostCenter(component) {
            const response = fetch(`https://asgard-api.azurewebsites.net/costcenters/CC6526/add`, {
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
                component.giveSuccessMessage(' The entry was added!')
            );
        }
        addEntryToCostCenter(this);
        //this.giveSuccessMessage('Sent Successfully ');
    };

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({ messageopen: false });
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
                        <Paper className="contact-page-paper"><Typography variant="display1" gutterBottom style={{ paddingTop: 40 }}>
                            Data Input
                        </Typography>

                            <Grid container spacing={24} >

                                <Grid item xs={12} lg={6} md={6} style={{ marginTop: 0 }}>
                                    <TextField
                                        id="UnitsProduced"
                                        type="text"
                                        pattern="-?[0-9]*(\.[0-9]+)?"
                                        label="Number of Units Produced"
                                        placeholder="Number of Units Produced"
                                        className="contact-page-name-list-field"
                                        margin="normal"
                                        onChange={e => this.setState({
                                            values: {
                                                InputDate: this.state.values.InputDate,
                                                UnitsProduced: e.target.value,
                                                Defects: this.state.values.Defects,
                                                WorkerTotal: this.state.values.WorkerTotal,
                                                SInc_Num: this.state.values.SInc_Num,
                                                QInc_Num: this.state.values.QInc_Num,
                                                SInc_Reason: this.state.values.SInc_Reason,
                                                QInc_Reason: this.state.values.QInc_Reason,
                                                HighUtil: this.state.values.HighUtil,
                                                LoUtil: this.state.values.LoUtil,
                                                Overtime: this.state.values.Overtime,
                                                Downtime: this.state.values.Downtime,
                                            }

                                        }
                                        )}
                                    />
                                </Grid>

                                <Grid item xs={12} lg={6} md={6} style={{ marginTop: 0 }}>
                                    <TextField
                                        id="Defects"
                                        label="Number of Defects"
                                        placeholder="Number of Defects"
                                        className="contact-page-name-list-field"
                                        margin="normal"
                                        onChange={e => this.setState({
                                            // ...this.state, Defects: e.target.value
                                            values: {
                                                InputDate: this.state.values.InputDate,
                                                UnitsProduced: this.state.values.UnitsProduced,
                                                Defects: e.target.value,
                                                WorkerTotal: this.state.values.WorkerTotal,
                                                SInc_Num: this.state.values.SInc_Num,
                                                QInc_Num: this.state.values.QInc_Num,
                                                SInc_Reason: this.state.values.SInc_Reason,
                                                QInc_Reason: this.state.values.QInc_Reason,
                                                HighUtil: this.state.values.HighUtil,
                                                LoUtil: this.state.values.LoUtil,
                                                Overtime: this.state.values.Overtime,
                                                Downtime: this.state.values.Downtime,

                                            }
                                        }
                                        )}
                                    />
                                </Grid>

                                {/* <Grid item xs={12} lg={6} md={6} style={{ marginTop: 10 }}>
                                    <TextField
                                        id="notes"
                                        label="Notes"
                                        placeholder="Notes"
                                        className="contact-page-name-list-field"
                                        margin="normal"
                                    />
                                </Grid> */}

                                <Grid item xs={12} lg={6} md={6} style={{ marginTop: 0 }}>
                                    <TextField
                                        id="Downtime"
                                        label="Assembly Line Downtime"
                                        placeholder="Assembly Line Downtime"
                                        className="contact-page-name-list-field"
                                        margin="normal"
                                        onChange={e => this.setState({
                                            values: {
                                                InputDate: this.state.values.InputDate,
                                                UnitsProduced: this.state.values.UnitsProduced,
                                                Defects: this.state.values.Defects,
                                                WorkerTotal: this.state.values.WorkerTotal,
                                                SInc_Num: this.state.values.SInc_Num,
                                                QInc_Num: this.state.values.QInc_Num,
                                                SInc_Reason: this.state.values.SInc_Reason,
                                                QInc_Reason: this.state.values.QInc_Reason,
                                                HighUtil: this.state.values.HighUtil,
                                                LoUtil: this.state.values.LoUtil,
                                                Overtime: this.state.values.Overtime,
                                                Downtime: e.target.value
                                            }
                                        }
                                        )}
                                    />
                                </Grid>

                                <Grid item xs={12} lg={6} md={6} style={{ marginTop: 0 }}>
                                    <TextField
                                        id="Overtime"
                                        label="Assembly Line Overtime"
                                        placeholder="Assembly Line Overtime"
                                        className="contact-page-name-list-field"
                                        margin="normal"
                                        onChange={e => this.setState({
                                            values: {
                                                InputDate: this.state.values.InputDate,
                                                UnitsProduced: this.state.values.UnitsProduced,
                                                Defects: this.state.values.Defects,
                                                WorkerTotal: this.state.values.WorkerTotal,
                                                SInc_Num: this.state.values.SInc_Num,
                                                QInc_Num: this.state.values.QInc_Num,
                                                SInc_Reason: this.state.values.SInc_Reason,
                                                QInc_Reason: this.state.values.QInc_Reason,
                                                HighUtil: this.state.values.HighUtil,
                                                LoUtil: this.state.values.LoUtil,
                                                Overtime: e.target.value,
                                                Downtime: this.state.values.Downtime
                                            }
                                        }
                                        )}
                                    />
                                </Grid>

                                <Grid item xs={12} lg={6} md={6} style={{ marginTop: 0 }}>
                                    <TextField
                                        id="SInc_Num"
                                        label="Number of Safety Incidents"
                                        placeholder="Number of Safety Incidents"
                                        className="contact-page-name-list-field"
                                        margin="normal"
                                        onChange={e => this.setState({
                                            values: {
                                                InputDate: this.state.values.InputDate,
                                                UnitsProduced: this.state.values.UnitsProduced,
                                                Defects: this.state.values.Defects,
                                                WorkerTotal: this.state.values.WorkerTotal,
                                                SInc_Num: e.target.value,
                                                QInc_Num: this.state.values.QInc_Num,
                                                SInc_Reason: this.state.values.SInc_Reason,
                                                QInc_Reason: this.state.values.QInc_Reason,
                                                HighUtil: this.state.values.HighUtil,
                                                LoUtil: this.state.values.LoUtil,
                                                Overtime: this.state.values.Overtime,
                                                Downtime: this.state.values.Downtime
                                            }
                                        }
                                        )}
                                    />
                                </Grid>

                                <Grid item xs={12} lg={6} md={6} style={{ marginTop: 0 }}>
                                    <TextField
                                        id="Sinc_Reason"
                                        label="Safety Incident Reason"
                                        placeholder="Safety Incident Reason"
                                        className="contact-page-name-list-field"
                                        margin="normal"
                                        onChange={e => this.setState({
                                            values: {
                                                InputDate: this.state.values.InputDate,
                                                UnitsProduced: this.state.values.UnitsProduced,
                                                Defects: this.state.values.Defects,
                                                WorkerTotal: this.state.values.WorkerTotal,
                                                SInc_Num: this.state.values.SInc_Num,
                                                QInc_Num: this.state.values.QInc_Num,
                                                SInc_Reason: e.target.value,
                                                QInc_Reason: this.state.values.QInc_Reason,
                                                HighUtil: this.state.values.HighUtil,
                                                LoUtil: this.state.values.LoUtil,
                                                Overtime: this.state.values.Overtime,
                                                Downtime: this.state.values.Downtime
                                            }
                                        }
                                        )}
                                    />
                                </Grid>

                                <Grid item xs={12} lg={6} md={6} style={{ marginTop: 0 }}>
                                    <TextField
                                        id="QInc_Num"
                                        label="Number of Quality Incidents"
                                        placeholder="Number of Quality Incidents"
                                        className="contact-page-name-list-field"
                                        margin="normal"
                                        onChange={e => this.setState({
                                            values: {
                                                InputDate: this.state.values.InputDate,
                                                UnitsProduced: this.state.values.UnitsProduced,
                                                Defects: this.state.values.Defects,
                                                WorkerTotal: this.state.values.WorkerTotal,
                                                SInc_Num: this.state.values.SInc_Num,
                                                QInc_Num: e.target.value,
                                                SInc_Reason: this.state.values.SInc_Reason,
                                                QInc_Reason: this.state.values.QInc_Reason,
                                                HighUtil: this.state.values.HighUtil,
                                                LoUtil: this.state.values.LoUtil,
                                                Overtime: this.state.values.Overtime,
                                                Downtime: this.state.values.Downtime
                                            }
                                        }
                                        )}
                                    />
                                </Grid>

                                <Grid item xs={12} lg={6} md={6} style={{ marginTop: 0 }}>
                                    <TextField
                                        id="Qinc_reason"
                                        label="Quality Incident Reason"
                                        placeholder="Quality Incident Reason"
                                        className="contact-page-name-list-field"
                                        margin="normal"
                                        onChange={e => this.setState({
                                            values: {
                                                InputDate: this.state.values.InputDate,
                                                UnitsProduced: this.state.values.UnitsProduced,
                                                Defects: this.state.values.Defects,
                                                WorkerTotal: this.state.values.WorkerTotal,
                                                SInc_Num: this.state.values.SInc_Num,
                                                QInc_Num: this.state.values.QInc_Num,
                                                SInc_Reason: this.state.values.SInc_Reason,
                                                QInc_Reason: e.target.value,
                                                HighUtil: this.state.values.HighUtil,
                                                LoUtil: this.state.values.LoUtil,
                                                Overtime: this.state.values.Overtime,
                                                Downtime: this.state.values.Downtime
                                            }
                                        }
                                        )}
                                    />
                                </Grid>

                                <Grid item xs={12} lg={6} md={6} style={{ marginTop: 0 }}>
                                    <TextField
                                        id="Lo Util"
                                        label="Low Utility Reason"
                                        placeholder="Low Utility Reason"
                                        className="contact-page-name-list-field"
                                        margin="normal"
                                        onChange={e => this.setState({
                                            values: {
                                                InputDate: this.state.values.InputDate,
                                                UnitsProduced: this.state.values.UnitsProduced,
                                                Defects: this.state.values.Defects,
                                                WorkerTotal: this.state.values.WorkerTotal,
                                                SInc_Num: this.state.values.SInc_Num,
                                                QInc_Num: this.state.values.QInc_Num,
                                                SInc_Reason: this.state.values.SInc_Reason,
                                                QInc_Reason: this.state.values.QInc_Reason,
                                                HighUtil: this.state.values.HighUtil,
                                                LoUtil: e.target.value,
                                                Overtime: this.state.values.Overtime,
                                                Downtime: this.state.values.Downtime
                                            }
                                        }
                                        )}
                                    />
                                </Grid>

                                <Grid item xs={12} lg={6} md={6} style={{ marginTop: 0 }}>
                                    <TextField
                                        id="HighUtil"
                                        label="High Utility Reason"
                                        placeholder="High Utility Reason"
                                        className="contact-page-name-list-field"
                                        margin="normal"
                                        onChange={e => this.setState({
                                            values: {
                                                InputDate: this.state.values.InputDate,
                                                UnitsProduced: this.state.values.UnitsProduced,
                                                Defects: this.state.values.Defects,
                                                WorkerTotal: this.state.values.WorkerTotal,
                                                SInc_Num: this.state.values.SInc_Num,
                                                QInc_Num: this.state.values.QInc_Num,
                                                SInc_Reason: this.state.values.SInc_Reason,
                                                QInc_Reason: this.state.values.QInc_Reason,
                                                HighUtil: e.target.value,
                                                LoUtil: this.state.values.LoUtil,
                                                Overtime: this.state.values.Overtime,
                                                Downtime: this.state.values.Downtime
                                            }
                                        }
                                        )}
                                    />
                                </Grid>

                                <Grid item xs={12} lg={12} md={6} style={{ marginTop: 0 }}>
                                    <TextField
                                        id="WorkerTotal"
                                        label="Number of Workers at a Line"
                                        placeholder="Number of Workers at a Line"
                                        className="contact-page-name-list-field"
                                        margin="normal"
                                        onChange={e => this.setState({
                                            values: {
                                                InputDate: this.state.values.InputDate,
                                                UnitsProduced: this.state.values.UnitsProduced,
                                                Defects: this.state.values.Defects,
                                                WorkerTotal: e.target.value,
                                                SInc_Num: this.state.values.SInc_Num,
                                                QInc_Num: this.state.values.QInc_Num,
                                                SInc_Reason: this.state.values.SInc_Reason,
                                                QInc_Reason: this.state.values.QInc_Reason,
                                                HighUtil: this.state.values.HighUtil,
                                                LoUtil: this.state.values.LoUtil,
                                                Overtime: this.state.values.Overtime,
                                                Downtime: this.state.values.Downtime
                                            }
                                        }
                                        )}
                                    />
                                </Grid>

                                {/* <Grid item xs={12} lg={10} md={12} style={{ marginTop: 10, marginLeft:100 }}>
                                    <TextField
                                        id="utilization"
                                        label="High and Low Utilization Reasons"
                                        multiline
                                        fullWidth
                                        rows="4"
                                        placeholder="High and Low Utilization Reasons"

                                        className="contact-page-name-list-field"
                                        margin="normal"
                                    />
                                </Grid> */}

                                <Grid item xs={12} lg={12} md={12} style={{ marginTop: 15, marginBottom: 15 }}>
                                    <Button type="button" color="primary" variant="raised" onClick={this.onSubmit}>Submit</Button>
                                </Grid>

                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </div >
        );
    }


}




export default InputDataPage;
