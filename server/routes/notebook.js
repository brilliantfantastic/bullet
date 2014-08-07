module.exports = function(app) {
  app.get("/api/notebooks", function(req, res) {
    var notebooks = { notebooks: [{ id: 1, page_ids: [1] }], pages: [{ id: 1, index: 1, title: "Index" }] };
    res.setHeader("Content-Type", "application/json");
    res.send(200, notebooks);
  });
};
