'use strict';

const app = express();

const startServer = (port) => {
  app.listen(port);
}

module.exports = {
  server: app,
  start: startServer,
};