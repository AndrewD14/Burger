//import the npm packages
var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'us-cdbr-iron-east-05.cleardb.net',
    user     : 'bc1b5f16727246',
    password : 'ded30105',
    database : 'heroku_3d6bd26e6ff3156'
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