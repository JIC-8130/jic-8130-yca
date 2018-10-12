var Connection = require('tedious').Connection;
var Request = require('tedious').Request;


/**
 * Attempts to connect to the database by creating a new Connection. 
 * Returns the Connection if successful, otherwise returns null.
 */
function connectToDB() {

    // Necessary data to access the db.
    var config = 
    {
        userName: 'dbadmin8130', 
        password: 'JuniorDesigndb!', //TODO: this should probably be encrypted lol
        server: 'asgard-data.database.windows.net',
        options: 
        {
            database: 'asgard-db'
            , encrypt: true
        }
    }


    var connection = new Connection(config);
    connection.on('connect', function(err) 
        {
            if (err) 
            {
                console.log(err);
                return null;
            }
            else
            {
                queryDatabase();
                return connection;
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
//Uncomment this if you wanna run it with node asgard-data.js
// queryDatabase();