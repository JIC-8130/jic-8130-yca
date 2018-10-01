import React from 'React';

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

export class FormsPage extends React.Component {

    state = {
        messageopen: false,
        messageInfo: {},
        gender: 'male'
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
        this.giveSuccessMessage('send successfully ');
        //this.props.startAddLogin(user);
        // this.props.history.push('/');
        // needs to only work with acceptable data
        // only alpha + numbers
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
                        <Paper className="contact-page-paper"><Typography variant="display1" gutterBottom style={{ padding: 15 }}>
                        Data Input
                        </Typography>

                            <Grid container spacing={24} >

                                <Grid item xs={12} lg={6} md={6} style={{ marginTop: 10 }}>
                                    <TextField
                                        id="units"
                                        type="text"
                                        pattern="-?[0-9]*(\.[0-9]+)?"
                                        label="Number of Units Produced"
                                        placeholder="Number of Units Produced"
                                        className="contact-page-name-list-field"
                                        margin="normal"
                                    />
                                </Grid>

                                <Grid item xs={12} lg={6} md={6} style={{ marginTop: 10 }}>
                                    <TextField
                                        id="workers"
                                        label="Number of Workers at a Line"
                                        placeholder="Number of Workers at a Line"
                                        className="contact-page-name-list-field"
                                        margin="normal"
                                    />
                                </Grid>

                                <Grid item xs={12} lg={6} md={6} style={{ marginTop: 10 }}>
                                    <TextField
                                        id="defects"
                                        label="Number of Defects"
                                        placeholder="Number of Defects"
                                        className="contact-page-name-list-field"
                                        margin="normal"
                                    />
                                </Grid>

                                <Grid item xs={12} lg={6} md={6} style={{ marginTop: 10 }}>
                                    <TextField
                                        id="overtime"
                                        label="Assembly Line Overtime"
                                        placeholder="Assembly Line Overtime"
                                        className="contact-page-name-list-field"
                                        margin="normal"
                                    />
                                </Grid>

                                <Grid item xs={12} lg={6} md={6} style={{ marginTop: 10 }}>
                                    <TextField
                                        id="quality"
                                        label="Number of Quality Incidents"
                                        placeholder="Number of Quality Incidents"
                                        className="contact-page-name-list-field"
                                        margin="normal"
                                    />
                                </Grid>

                                <Grid item xs={12} lg={6} md={6} style={{ marginTop: 10 }}>
                                    <TextField
                                        id="downtime"
                                        label="Assembly Line Downtime"
                                        placeholder="Assembly Line Downtime"
                                        className="contact-page-name-list-field"
                                        margin="normal"
                                    />
                                </Grid>

                                <Grid item xs={12} lg={6} md={6} style={{ marginTop: 10 }}>
                                    <TextField
                                        id="safety"
                                        label="Number of Safety Incidents"
                                        placeholder="Number of Safety Incidents"
                                        className="contact-page-name-list-field"
                                        margin="normal"
                                    />
                                </Grid>

                                <Grid item xs={12} lg={6} md={6} style={{ marginTop: 10 }}>
                                    <TextField
                                        id="notes"
                                        label="Notes"
                                        placeholder="Notes"
                                        className="contact-page-name-list-field"
                                        margin="normal"
                                    />
                                </Grid>

                                <Grid item xs={12} lg={10} md={12} style={{ marginTop: 10, marginLeft:100 }}>
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
                                </Grid>

                                <Grid item xs={12} lg={12} md={12} style={{ marginTop: 10, marginBottom: 17 }}>
                                    <Button type="button" color="primary" variant="raised" onClick={this.onSubmit}>Submit</Button>
                                </Grid>

                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }


}




export default FormsPage;
