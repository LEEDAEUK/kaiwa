const { Connection, Request } = require("tedious");

const config = {
  authentication: {
    options: {
      userName: process.env["MSSQLID"],
      password: process.env["MSSQLPW"],
    },
    type: "default",
  },
  server: "lee-pf.database.windows.net",
  options: {
    database: "lee-pf-db",
    encrypt: true,
  },
};

function conn(sql, callback) {
  var connection = new Connection(config);
  connection.on("connect", function (err) {
    if (err) {
      console.log("\nSQL Sevrer connect error.(" + err + ")\n");
      process.exit();
    }
    var request = new Request(sql, function (err) {
      if (err) {
        console.log(err.message);
        if (err.message == "1") {
          callback([], "not exist");
        } else {
          callback([], "unknown error");
        }
        return;
      }
      callback(data, "good");
    });

    let data = [];
    var result = {};
    request.on("row", function (columns) {
      columns.forEach(function (column) {
        result[column.metadata.colName] = column.value;
      });
      data.push(result);
      result = {};
    });

    request.on("requestCompleted", function () {
      connection.close();
    });
    connection.execSql(request);
  });

  connection.on("end", function () {

  });
}

module.exports = {
  getF: function (sql, resolve) {
    conn(sql, function (datas, message) {
      resolve({ datas: datas, message: message });
    });
  }
}