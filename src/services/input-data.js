var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var TYPES = require("tedious").TYPES;
const jsonSql = require("json-sql")({valuesPrefix: "@"});
// Create connection to database
var config = require("../../secrets/db-config.json");

var connection = new Connection(config);

/**
 * Gets all the rows from the table.
 */
function getAllCostCenter(costCenter) {
    connection.on('connect', function(err) {
            if (err) {
                console.log(err);
                return false;
            }
            else {  
                queryGetAll(costCenter);
                return true;
            }
        }
    );
}

function addToCostCenter() {
    connection.on('connect', function(err) {
            if (err) {
                console.log(err);
                return false;
            }
            else {  
                add1Row();
                return true;
            }
        }
    );
}

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
                    process.exit();
                }
            );

     request.on('row', function(columns) {
        columns.forEach(function(column) {
            console.log("%s\t%s", column.metadata.colName, column.value);
         });
             });
     connection.execSql(request);
}


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

function add1Row() {


    var addStmt1 = jsonSql.build({
        type: "insert",
        table: "CC6526",
        values: {
            Date: "1997-07-01",
            UnitsProduced: 99
            // Defects: 99,
            // WorkerTotal: 99,
            // OverTime: 99,
            // DownTime: 99,
            // SafetyInc: 99,
            // QualityInc: 99,
            // HighUtil: "Lorem Ipsum",
            // LoUtil: "It really do be like that ! !!"           
        }
    });
    console.log(addStmt1.query);
    console.log(typeof(addStmt1.values.p1));





    var addStmt = "INSERT INTO CC6526 (Date, UnitsProduced) VALUES ('2017-09-09', 90)";
    var addReq = new Request(addStmt1.query, function(err) {
        if (err) {
            throw err;
        }
        console.log("Successfully added data!");
        process.exit();
    });

    addReq.addParameter("p1", TYPES.Date, addStmt1.values.p1)
    connection.execSql(addReq);
}

getAllCostCenter("CC6526");
// addToCostCenter();

