//import the npm packages
var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'mysql://bc1b5f16727246:ded30105@us-cdbr-iron-east-05.cleardb.net/heroku_3d6bd26e6ff3156?reconnect=true',
    user     : 'burger_user',
    password : 'burgers',
    database : 'burgers_db'
  });

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;