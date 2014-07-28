module.exports = function(app) {
  app.post("/api/users", function(req, res) {
    var user = { user: { id: 1, name: "Jimmy Page", email: "jimmy.page@zeppelin.com", access_token: "secret token!" } }
    res.setHeader("Content-Type", "application/json");
    res.send(201, user);
  });
};
