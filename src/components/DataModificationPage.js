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


import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import { Table } from '@material-ui/core';


const dataPage = () => (
  <React.Fragment>
    
   <Grid container spacing={24}>
        <Grid item xs={12} style={{marginTop:10}}>

        <Typography variant="display1" gutterBottom style={{ padding: 15, align: "center"  }}>
            Line Data
        </Typography>

            <Paper className="data-page">

                 <Table baseId="table-with-interactions" className="data-table">
                     <TableHead className="table-head">
                         <TableRow>
                            <TableCell numeric>Line Number</TableCell>
                            <TableCell numeric>Units</TableCell>
                            <TableCell numeric>Workers</TableCell>
                            <TableCell numeric>Defects</TableCell>
                            <TableCell numeric>Overtime</TableCell>
                            <TableCell numeric>Quality Incidents</TableCell>
                            <TableCell numeric>Downtime</TableCell>
                            <TableCell>Notes</TableCell>
                            <TableCell>Utilization</TableCell>
                        </TableRow>
                     </TableHead>

                     <TableBody className="table-body">

                         {/* The first row of data in table */}
                         <TableRow>
                             <TableCell>1</TableCell>
                             <TableCell>100</TableCell>
                             <TableCell>25</TableCell>
                             <TableCell>13</TableCell>
                             <TableCell>33</TableCell>
                             <TableCell>5</TableCell>
                             <TableCell>21</TableCell>
                             <TableCell>Running as scheduled</TableCell>
                             <TableCell>1</TableCell>
                         </TableRow>

                        {/* Second row of data */}
                         <TableRow>
                            <TableCell>2</TableCell>
                             <TableCell>230</TableCell>
                             <TableCell>18</TableCell>
                             <TableCell>9</TableCell>
                             <TableCell>17</TableCell>
                             <TableCell>11</TableCell>
                             <TableCell>32</TableCell>
                             <TableCell>Maintenance Required</TableCell>
                             <TableCell>4</TableCell>
                         </TableRow>

                        {/* Third row of data */}
                         <TableRow>
                            <TableCell>3</TableCell>
                             <TableCell>97</TableCell>
                             <TableCell>14</TableCell>
                             <TableCell>28</TableCell>
                             <TableCell>50</TableCell>
                             <TableCell>0</TableCell>
                             <TableCell>19</TableCell>
                             <TableCell>Running as scheduled</TableCell>
                             <TableCell>1</TableCell>
                         </TableRow>
                     </TableBody>
                 </Table>

            </Paper>
        </Grid>

    </Grid>
  </React.Fragment>
);

export default dataPage;