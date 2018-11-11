var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var TYPES = require("tedious").TYPES;
const jsonSql = require("json-sql")({valuesPrefix: "@"});

const DEBUG = true;

//TODO: find out if you have to manually close connections.

/**
 * Creates the connection to the database.
 * @returns {Connection} the db connection
 */
function createConnection() {
    var config = require("../../secrets/db-config.json");
    return new Connection(config);
}

/**
 * Returns all rows from the given cost center.
 * @param {string} costCenter: the cost center ID code.
 * @returns {boolean} Whether the request was successful.
 */
function getAllDataFrom(costCenter) {
    var connection = createConnection();
    connection.on('connect', function(err) {
            if (err) {
                console.log(err);
                return false;
            }
            else {  
                connection.execSql(queryGetAll(costCenter));
                // connection.close();
                return true;
            }
        }
    );
}


/**
 * Helper function for getAllFrom. Creates the Request (query) to get all
 * rows from the cost center's table.
 * @param {string} costCenter the cost center ID code.
 */
function queryGetAll(costCenter) {

    console.log('Reading rows from the Table...');

       // Read all rows from table
    request = new Request(
        "SELECT * FROM " + costCenter,
        function(err, rowCount, rows) { 
            if (err) {
                console.log(err);
            }
            if (DEBUG) {
                console.log(rowCount + ' row(s) returned');
            }
        }
    );
    if (DEBUG) {
        request.on('row', function(columns) {
            columns.forEach(
                function(column) {
                    console.log("%s\t%s", column.metadata.colName, column.value);
                }
            );
        });
    }

    return request;
}

/**
 * Queries db for data from a particular date.
 * @param {string} costCenter The cost center we want data from.
 * @param {string} date The date to select data from.
 * @returns false if there is a DB error.
 */
function getDataFrom(costCenter, date) {
    var connection = createConnection();
    connection.on('connect', function(err) {
            if (err) {
                console.log(err);
                return false;
            }
            else {  
                jsonData = {};
                connection.execSql(queryGetCCData(costCenter, date, jsonData));
                // connection.close();
                // console.log("This is the jsonData obj: \n" + JSON.stringify(jsonData));
                return jsonData;
            }
        }
    );
}

/**
 * Helper method for getDataFrom. Creates SQL query to get data from specified
 * cost center.
 * @param {string} costCenter The cost center we want to get data from.
 * @param {string} date The specific date we want to get data from.
 * @returns A SQL query that can return the row for the given date. 
 */
function queryGetCCData(costCenter, date, jsonData) {
    var getStmt = jsonSql.build(
        {
            type: "select",
            table: costCenter,
            condition: {InputDate: {$eq: date}}
        }
    );

    request = new Request(
        getStmt.query,
        function(err, rowCount, rows) {
            if (err) {
                throw err;
            } else {
                console.log("Successfully got data from cost center " + costCenter);
                console.log(jsonData);
            }
        }

    );

    request.on('row', function(columns) {
        columns.forEach(
            function(column) {
                jsonData[column.metadata.colName] = column.value;
            }
        );
    });
    
    request.on("doneProc", function() {
        console.log("Done with request");
    });


    request.addParameter("p1", TYPES.Date, getStmt.values.p1);
    return request;

}



/**
 * Adds data to the given cost center's table.
 * @param {object} ccData the cost center's data. Expects an object that looks
 * like this:
 * {
 *     costCenter: <cost center ID>,
 *     values: {
 *         InputDate: <Date: YYYY-MM-DD>,
 *         UnitsProduced: <int>,
 *         Defects: <int>
 *         WorkerTotal: <int>
 *         SInc_Num: <int>
 *         QInc_Num: <int>
 *         SInc_Reason: <string>
 *         QInc_Reason: <string>
 *         HighUtil: <string>
 *         LoUtil: <string> 
 *         Overtime: <int>
 *         Downtime: <int>
 *     }
 * } 
 */
function addToCostCenter(ccData) {
    var connection = createConnection();
    connection.on('connect', function(err) {
            if (err) {
                console.log(err);
                return false;
            }
            else {  
                connection.execSql(addCCRow(ccData));
                return true;
            }
        }
    );
}


/**
 * Creates a Request for adding the given data to the db.
 * @param {object} ccData The data to add to the db. See comment on addToCostCenter
 * for formatting.
 * @returns The Request for adding the data to the db. 
 */
function addCCRow(ccData) {

    var addStmt1 = jsonSql.build({
        type: "insert",
        table: ccData.costCenter,
        values: ccData.values
    });

    var addReq = new Request(
        addStmt1.query,
        function(err) {
            if (err) {
                throw err;
            }
            console.log("Successfully added data!");
        }
    );

    addReq.addParameter("p1", TYPES.Date, addStmt1.values.p1);
    addReq.addParameter("p2", TYPES.Text, addStmt1.values.p2);
    addReq.addParameter("p3", TYPES.Text, addStmt1.values.p3);
    addReq.addParameter("p4", TYPES.Text, addStmt1.values.p4);
    addReq.addParameter("p5", TYPES.Text, addStmt1.values.p5);

    return addReq;
}


//Expose our top-level functions for use elsewhere!
module.exports = {
    getAllFrom: getAllDataFrom,
    addAddToCostCenter: addToCostCenter,
    getDataFrom: getDataFrom
};