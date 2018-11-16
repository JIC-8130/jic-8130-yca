import React from 'react';
import { Grid, Table, TableHeaderRow, TableEditRow, TableEditColumn } from '@devexpress/dx-react-grid-material-ui';
import Paper from "@material-ui/core/Paper";
import { EditingState } from '@devexpress/dx-react-grid';
import fetch from "node-fetch";
import CircularProgress from '@material-ui/core/CircularProgress';
import regeneratorRuntime from "regenerator-runtime";
import ReactGrid from "@material-ui/core/Grid";

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
            isLoading: false
        };

        this.commitChanges = this.commitChanges.bind(this);
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch(`https://asgard-api.azurewebsites.net/costcenters/CC6526`)
            .then(response => response.json())
            .then(data => this.setState({ rows: data, isLoading: false }))
    }

    componentDidUpdate() {
        console.log(JSON.stringify(EditingState.defaultAddedRows));
    }

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
                        // showAddCommand
                        showEditCommand
                    // showDeleteCommand
                    />
                </Grid>
            </Paper>
        );
    }
}

export default DataTable;