// Generated by CoffeeScript 1.7.1
(function() {
  var md, server;

  md = require('./lib/markdown');

  server = require('./lib/server');

  if (module === require.main) {
    server.create('../config.json');
  }

}).call(this);
