module.exports = function(app) {

    app.get("/submit", function(req, res) {
      res.sendFile(path.join(__dirname, orm.js));
    });
  
    app.get("/devour", function(req, res) {
      res.sendFile(path.join(__dirname, "../views/index.handlebars"));
    });
  
    // If no matching route is found default to home
    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });
  };
  