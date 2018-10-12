var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var TYPES = require("tedious").TYPES;
const jsonSql = require("json-sql")({valuesPrefix: "@"});


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
function getAllFrom(costCenter) {
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
 * Helper function for getAllCostCenter. Creates the 
 * @param {string} costCenter the cost center ID code.
 */
function queryGetAll(costCenter) {

    console.log('Reading rows from the Table...');

       // Read all rows from table
     request = new Request(
          "SELECT * FROM " + costCenter,
             function(err, rowCount, rows) 
                { 
                    if (err) {
                        console.log(err);
                    }
                    console.log(rowCount + ' row(s) returned');
                }
            );

     request.on('row', function(columns) {
        columns.forEach(function(column) {
            console.log("%s\t%s", column.metadata.colName, column.value);
         });
             });
    //  connection.execSql(request);
    return request;
}



/**
 * Adds data to the given cost center's table.
 * @param {object} ccData the cost center's data. Expects an object that looks
 * like this:
 * {
 *     costCenter: <cost center ID>,
 *     values: {
 *         Date: <value>,
 *         UnitsProduced: <value>,
 *         Defects: <value>
 *         WorkerTotal: <value>
 *         Overtime: <value>
 *         Downtime: <value>
 *         SafetyInc: <value>
 *         QualityInc: <value>
 *         HighUtil: <value>
 *         LoUtil: <value> 
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

    return addReq;
}


//Doesn't work, but maybe one day...
function loadBulkData() {
  var option = { keepNulls: false }; // option to honor null
  var table = "CC6526";
  var bulkLoad = connection.newBulkLoad(table, option, function(err, rowCont) {
    if (err) {
      throw err;
    }
    console.log('rows inserted :', rowCont);
    connection.close();
  });
  // setup columns
  bulkLoad.addColumn("Date", TYPES.Date, { nullable: false });
  bulkLoad.addColumn('UnitsProduced', TYPES.Int, { nullable: true });
  bulkLoad.addColumn('Defects', TYPES.Int, { nullable: true });
  bulkLoad.addColumn('WorkerTotal', TYPES.Int, { nullable: true });
  bulkLoad.addColumn('Overtime', TYPES.Int, { nullable: true });
  bulkLoad.addColumn("Downtime", TYPES.Int, { nullable: true });
  bulkLoad.addColumn('SafetyInc', TYPES.Int, { nullable: true });
  bulkLoad.addColumn('QualityInc', TYPES.Int, { nullable: true });
  bulkLoad.addColumn('HighUtil', TYPES.Text, { nullable: true });
  bulkLoad.addColumn('LoUtil', TYPES.Text, { nullable: true });

  // add rows
  bulkLoad.addRow({ Date: "2018-10-11"});
        // UnitsProduced: 99,
        // Defects: 99,
        // WorkerTotal: 99,
        // OverTime: 99,
        // DownTime: 99,
        // SafetyInc: 99,
        // QualityInc: 99,
        // HighUtil: "Lorem Ipsum",
        // LoUtil: "It really do be like that ! !!"
  // perform bulk insert
  connection.execBulkLoad(bulkLoad);
}

//Expose our top-level functions for use elsewhere!
module.exports = {
    getAllFrom: getAllFrom,
    addAddToCostCenter: addToCostCenter
};