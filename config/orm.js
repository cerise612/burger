module.exports = function(app){
// selectAll()
// Root get route
app.get("/", function(req, res) {
    connection.query("SELECT * FROM burgers;", function(err, name) {
        if (err) {
            return res.status(500).end();
          }

      res.render("id", { burgers: name });
    });
  });
// insertOne()
// Post route -> back to home
app.post("/", function(req, res) {
    connection.query("INSERT INTO burgers (name) VALUES (?)", [req.burger.name], function(err, result) {
        if (err) {
            return res.status(500).end();
          }
  // Send back the ID of the new movie
          res.json({ id: result.insertId });
          console.log({ id: result.insertId });
    });
  });

// updateOne()
// Put route -> back to home
app.put("/:id", function(req, res) {
    connection.query("UPDATE burgers SET name = ? WHERE id = ?", [req.burger.name, req.params.id], function(err, result) {
      if (err) {
        // If an error occurred, send a generic server failure
        return res.status(500).end();
      }
      else if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
  
    });
  });


};