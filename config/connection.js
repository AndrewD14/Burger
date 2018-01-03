//import the npm packages
var mysql = require('mysql');

var pool = mysql.createPool({
    host     : 'us-cdbr-iron-east-05.cleardb.net',
    user     : 'bc1b5f16727246',
    password : 'ded30105',
    database : 'heroku_3d6bd26e6ff3156',
    connectionLimit: 1
  });

// Make connection.
var getConnection = function(){
  pool.getConnection(function(error, connection){
    if(error){
      console.error("error connecting: " + error);
      return;
    }
    return connection;
  });
}

//closes the connection
var closeConnection = function(connection){
  connection.release();
}

// Export connection for our ORM to use.
module.exports = {getConnection: getConnection,
  closeConnection: closeConnection};