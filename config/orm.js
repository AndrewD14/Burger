//imports the connection config
var connection = require('./connection.js');

var orm = {
    selectAll:function(table, func){
        connection.query("SELECT * FROM ??", table, function(error, data){
            if(error) throw error;

            func(data);
        });
    },
    insertOne: function(table, cols, values, func){
        connection.query("INSERT INTO ?? (??) VALUES (?)", [table, cols, values], function(error, data){
            if(error) throw error;

            func(data);
        });
    },
    updateOne: function(table, values, id, func){
        connection.query("UPDATE ?? SET ? WHERE id = ?", [table, values, id], function(error, data){
            if(error) throw error;

            func(data);
        });
    }
}

module.exports = orm;