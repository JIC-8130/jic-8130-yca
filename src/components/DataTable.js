import React from 'react';
import { Grid, Table, TableHeaderRow, TableEditRow, TableEditColumn } from '@devexpress/dx-react-grid-material-ui';
import Paper from "@material-ui/core/Paper";
import { EditingState } from '@devexpress/dx-react-grid';
import fetch from "node-fetch";
import CircularProgress from '@material-ui/core/CircularProgress';
import regeneratorRuntime from "regenerator-runtime";
import ReactGrid from "@material-ui/core/Grid";
import bodyConstructor from "../services/bodyConstructor";

const getRowId = row => row.id;


class DataTable extends React.PureComponent {


    constructor(props) {
        super(props);
        this.state = {
            columns: [
                { name: "InputDate", title: "Date" },
                { name: "UnitsProduced", title: "Units Produced" },
                { name: "Defects", title: "Defects" },
                { name: "WorkerTotal", title: "Worker Total" },
                { name: "SInc_Num", title: "# of Safety Incidents" },
                { name: "QInc_Num", title: "# of Quality Incidents" },
                { name: "SInc_Reason", title: "Safety Incident Reasons" },
                { name: "QInc_Reason", title: "Quality Incident Reasons" },
                { name: "HighUtil", title: "High Utilization" },
                { name: "LoUtil", title: "Low Utilization" },
                { name: "Overtime", title: "Overtime" }
            ],
            rows: [],
            isLoading: false,
            changedRows: []
        };

        this.commitChanges = this.commitChanges.bind(this);
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch(`https://asgard-api.azurewebsites.net/costcenters/CC6526`)
            .then(response => response.json())
            .then(data => this.setState({ rows: data, isLoading: false }))

    }

    // This method gets run when the state changes. We change the state in commitChanges so that
    // the DB sync included in this method gets triggered.
    componentDidUpdate() {

        if (this.state.changedRows.length != 0) {
            // We use an arrow function here to maintain the correct "this" context
            this.state.changedRows.forEach((i) => {
                fetch("https://asgard-api.azurewebsites.net/costcenters/CC6526/update?date=" + this.state.rows[i - 1].InputDate, {
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
                    body: bodyConstructor.createBody(this.state.rows[i - 1]), // body data type must match "Content-Type" header
                });
            });
            // Reset to accept the next set of changes
            this.setState({ changedRows: [] });
        } else {
            console.log("No changes");
        }
    }

    // Changes the state to reflect changes made to the rows of the table.
    commitChanges({ added, changed, deleted }) {
        let { rows } = this.state;
        // if (added) {
        //     const startingAddedId = rows.length > 0 ? rows[rows.length - 1].id + 1 : 0;
        //     rows = [
        //         ...rows,
        //         ...added.map((row, index) => ({
        //             id: startingAddedId + index,
        //             ...row,
        //         })),
        //     ];
        // }
        if (changed) {
            rows = rows.map(row => (changed[row.id] ? { ...row, ...changed[row.id] } : row));
            // rows.map(row => (this.setState({ changedRows: this.state.changedRows.push(row.id) })));
            // console.log(this.state);
            var i;
            for (i = 1; i <= rows.length; i++) {
                if (changed[i] != null) {
                    // console.log(changed[i]);
                    var copy = this.state.changedRows;
                    copy.push(i);
                    this.setState({ changedRows: copy });
                }
            }
        }
        // if (deleted) {
        //     const deletedSet = new Set(deleted);
        //     rows = rows.filter(row => !deletedSet.has(row.id));
        // }
        this.setState({ rows });
        // console.log(JSON.stringify(this.state.rows));
    }

    render() {
        const { columns, rows, isLoading } = this.state;
        if (isLoading) {
            return (
                <ReactGrid container justify="center" alignContent="center" alignItems="center" style={{ padding: 200 }}>

                    <CircularProgress />
                </ReactGrid>
            );
        }
        return (
            <Paper>
                <Grid
                    rows={rows}
                    columns={columns}
                    getRowId={getRowId}
                >
                    <EditingState
                        onCommitChanges={this.commitChanges}
                    />
                    <Table />
                    <TableHeaderRow />
                    <TableEditRow />
                    <TableEditColumn
                        showEditCommand
                    />
                </Grid>
            </Paper>
        );
    }
}

export default DataTable;