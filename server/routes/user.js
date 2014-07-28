module.exports = function(app) {
  app.post('/api/users', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(201, { user: { access_token: "secret token!" } });
  });
};
