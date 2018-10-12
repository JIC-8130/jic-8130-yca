var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

// Create connection to database
var config = require("../../secrets/db-config.json");

var connection = new Connection(config);


function connectToDB() {
    connection.on('connect', function(err) 
        {
            if (err) 
            {
                console.log(err);
                return false;
            }
            else
            {
                queryDatabase();
                return true;
            }
        }
    );
}
// Attempt to connect and execute queries if connection goes through


function queryDatabase() {
    var accessDenied = connectToDB();
    if (accessDenied) {
        throw "Database access failed!";
    }
    console.log('Reading rows from the Table...');

       // Read all rows from table
     request = new Request(
          "SELECT * FROM Users",
             function(err, rowCount, rows) 
                {
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

// queryDatabase();