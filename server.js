var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Leila@1357",
  database: "day_planner_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

//Routes

app.get("/", function(req, res) {
  connection.query("SELECT * FROM plans", function(err, result) {
    if (err) throw err;
    res.render("index", { plans: result });
  });
});

app.post("/api/plans", function(req, res) {
  connection.query(
    "INSERT INTO plans (plan) VALUES (?)",
    [req.body.plan],
    function(err, result) {
      if (err) {
        return res.status(500).end();
      }
      res.json({ id: result.insertId });
      console.log({ id: result.insertId });
    }
  );
});

app.delete("/api/plans/:id", function(req, res) {
  connection.query("DELETE FROM plans WHERE id=?", [req.params.id], function(
    err,
    result
  ) {
    if (err) {
      return res.status(500).end();
    } else if (result.affectedRows === 0) {
      return res.status(404).end();
    }
    return res.status(200).end();
  });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
