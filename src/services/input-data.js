var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

// Create connection to database
var config = require("../../secrets/db-config.json");

var connection = new Connection(config);

/**
 * Gets all the rows from the table.
 * TODO: gotta find a way to make this work for any cost center
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
getAllCostCenter("CC6526");