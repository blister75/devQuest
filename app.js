(function() {
  var app, express;

  express = require("express");

  app = express();

  app.use(express["static"](__dirname + '/client'));

  app.listen(process.env.PORT || 3000);

}).call(this);