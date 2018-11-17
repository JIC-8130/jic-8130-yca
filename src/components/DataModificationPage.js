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

// export class DataModificationPage extends React.Component {

//   constructor(props) {
//     super(props);
//     this.handleEditClick = this.handleEditClick.bind(this);
//     this.handleDoneClick = this.handleDoneClick.bind(this);
//     this.state = { isEditing: false, textFieldValue: '120' };
//   }

//   handleEditClick(e) {
//     this.setState({ isEditing: true });
//   }

//   handleDoneClick(e) {
//     this.setState({ isEditing: false });
//   }

//   handleTextFieldChange(e) {
//     this.setState({ textFieldValue: e.target.value });
//   }

//   render() {

//     const isEditing = this.state.isEditing;
//     let table;
//     let button;


//     if (isEditing) {

//       button = <Button variant="raised" color="primary" onClick={this.handleDoneClick}><Typography variant="button" gutterBottom className="logintypography">
//         Done</Typography></Button>

//       table = <Table baseid="table-with-interactions" className="data-table">
//         <TableHead className="table-head">
//           <TableRow>
//             <TableCell numeric>Line Number</TableCell>
//             <TableCell numeric>Units</TableCell>
//             <TableCell numeric>Workers</TableCell>
//             <TableCell numeric>Defects</TableCell>
//             <TableCell numeric>Overtime</TableCell>
//             <TableCell numeric>Quality Incidents</TableCell>
//             <TableCell numeric>Downtime</TableCell>
//             <TableCell>Notes</TableCell>
//             <TableCell>Utilization</TableCell>

//           </TableRow>
//         </TableHead>

//         <TableBody className="table-body">

//           {/* The first row of data in table */}
//           <TableRow>
//             <TableCell> 1 </TableCell>
//             <TextField id="1-units" label={this.state.textFieldValue} onChange={this.handleTextFieldChange.bind(this)} />
//             <TableCell>25</TableCell>
//             <TableCell>13</TableCell>
//             <TableCell>33</TableCell>
//             <TableCell>5</TableCell>
//             <TableCell>21</TableCell>
//             <TableCell>Running as scheduled</TableCell>
//             <TableCell>1</TableCell>

//           </TableRow>

//           {/* Second row of data */}
//           <TableRow>
//             <TableCell>2</TableCell>
//             <TableCell>230</TableCell>
//             <TableCell>18</TableCell>
//             <TableCell>9</TableCell>
//             <TableCell>17</TableCell>
//             <TableCell>11</TableCell>
//             <TableCell>32</TableCell>
//             <TableCell>Maintenance Required</TableCell>
//             <TableCell>4</TableCell>
//           </TableRow>

//           {/* Third row of data */}
//           <TableRow>
//             <TableCell>3</TableCell>
//             <TableCell>97</TableCell>
//             <TableCell>14</TableCell>
//             <TableCell>28</TableCell>
//             <TableCell>50</TableCell>
//             <TableCell>0</TableCell>
//             <TableCell>19</TableCell>
//             <TableCell>Running as scheduled</TableCell>
//             <TableCell>1</TableCell>
//           </TableRow>
//         </TableBody>
//       </Table>

//     } else {

//       button = <Button variant="raised" color="primary" onClick={this.handleEditClick}><Typography variant="button" className="logintypography">
//         Edit </Typography></Button>

//       table = <Table baseid="table-with-interactions" className="editable-data-table">
//         <TableHead className="table-head">
//           <TableRow>
//             <TableCell numeric>Line Number</TableCell>
//             <TableCell numeric>Units</TableCell>
//             <TableCell numeric>Workers</TableCell>
//             <TableCell numeric>Defects</TableCell>
//             <TableCell numeric>Overtime</TableCell>
//             <TableCell numeric>Quality Incidents</TableCell>
//             <TableCell numeric>Downtime</TableCell>
//             <TableCell>Notes</TableCell>
//             <TableCell>Utilization</TableCell>

//           </TableRow>
//         </TableHead>

//         <TableBody className="table-body">

//           {/* The first row of data in table */}
//           <TableRow>
//             <TableCell> 1 </TableCell>
//             <TableCell>{this.state.textFieldValue}</TableCell>
//             <TableCell>25</TableCell>
//             <TableCell>13</TableCell>
//             <TableCell>33</TableCell>
//             <TableCell>5</TableCell>
//             <TableCell>21</TableCell>
//             <TableCell>Running as scheduled</TableCell>
//             <TableCell>1</TableCell>

//           </TableRow>

//           {/* Second row of data */}
//           <TableRow>
//             <TableCell>2</TableCell>
//             <TableCell>230</TableCell>
//             <TableCell>18</TableCell>
//             <TableCell>9</TableCell>
//             <TableCell>17</TableCell>
//             <TableCell>11</TableCell>
//             <TableCell>32</TableCell>
//             <TableCell>Maintenance Required</TableCell>
//             <TableCell>4</TableCell>
//           </TableRow>

//           {/* Third row of data */}
//           <TableRow>
//             <TableCell>3</TableCell>
//             <TableCell>97</TableCell>
//             <TableCell>14</TableCell>
//             <TableCell>28</TableCell>
//             <TableCell>50</TableCell>
//             <TableCell>0</TableCell>
//             <TableCell>19</TableCell>
//             <TableCell>Running as scheduled</TableCell>
//             <TableCell>1</TableCell>
//           </TableRow>
//         </TableBody>
//       </Table>
//     }

//     return (
//       <React.Fragment>

//         <Grid container>
//           <Grid item xs={12} style={{ marginTop: 10 }}>

//             <Typography variant="display1" gutterBottom style={{ padding: 15, align: "center" }}>
//               Line Data
//             </Typography>

//             <div>
//               <Paper className="data-page">

//                 {table}

//               </Paper>
//             </div>

//             {button}

//           </Grid>

//         </Grid>
//       </React.Fragment>
//     );
//   }
// }

export default DataModificationPage;