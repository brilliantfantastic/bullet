module.exports = function(app) {
  app.post("/api/bullets", function(req, res) {
    var bullet = { task-bullet: { id: 1, title: "This is a test", is_complete: false, page_id: 1} }
    res.setHeader("Content-Type", "application/json");
    res.send(201, bullet);
  });
};
