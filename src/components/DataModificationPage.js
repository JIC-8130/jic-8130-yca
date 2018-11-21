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
import Textfield from '@material-ui/core/TextField';


import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import { Table, TextField } from '@material-ui/core';
import DataTable from "./DataTable";

export class DataModificationPage extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (<DataTable costcenter={this.props.location.state.costCenter} />);
    }
}

export default DataModificationPage;