var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burger_db"
  });
  
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("connected as id " + connection.threadId);
  });
  
     
    
    
    // Start our server so that it can begin listening to client requests.
    app.listen(PORT, function() {
      // Log (server-side) when our server has started
      console.log("Server listening on: http://localhost:" + PORT);
    });