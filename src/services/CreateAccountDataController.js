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


function getUserHelper(userID) {

    console.log('Reading rows from the Table...');

    var userSelectSQL = jsonSql.build(
        {
            type: "select",
            table: "Users",
            condition: [
                {YCA_ID: {$eq: userID}}
            ]
        }
    );
    // console.log(userSelectSQL.query);
       // Read all rows from table
    request = new Request(
        userSelectSQL.query,
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
    request.addParameter("p1", TYPES.BigInt, parseInt(userID));

    return request;
}


function getUser(userID) {
    var connection = createConnection();
    connection.on('connect', function(err) {
            if (err) {
                console.log(err);
                return false;
            }
            else {  
                connection.execSql(getUserHelper(userID));
                // connection.close();
                return true;
            }
        }
    );
}


/**
 * Adds a new user to the database.
 * @param {object} userData the new user's data. Expects an object that looks
 * like this:
 * {
 *     values: {
 *         YCA_ID:
 *         FirstName:
 *         LastName:
 *         Email:
 *         UsrType:
 *         password:
 *     }
 * } 
 */
function addUser(userData) {
    var connection = createConnection();
    connection.on('connect', function(err) {
            if (err) {
                console.log(err);
                return false;
            }
            else {  
                connection.execSql(addUserHelper(userData));
                return true;
            }
        }
    );
}


/**
 * Creates a Request for adding the given data to the db.
 * @param {object} userData The user's data to add into the database.
 * @returns The Request for adding the data to the db. 
 */
function addUserHelper(userData) {

    var addStmt1 = jsonSql.build({
        type: "insert",
        table: "Users",
        values: userData.values
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

    addReq.addParameter("p1", TYPES.BigInt, addStmt1.values.p1);
    addReq.addParameter("p2", TYPES.VarChar, addStmt1.values.p2);
    addReq.addParameter("p3", TYPES.VarChar, addStmt1.values.p3);
    addReq.addParameter("p4", TYPES.VarChar, addStmt1.values.p4);
    addReq.addParameter("p5", TYPES.VarChar, addStmt1.values.p5);
    addReq.addParameter("p6", TYPES.VarChar, addStmt1.values.p6);

    return addReq;
}




module.exports = {
    addUser: addUser,
    getUser: getUserHelper
}