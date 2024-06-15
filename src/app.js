const express = require('express');
const JobRoutes = require('./routes/jobRoutes');
const boot = require('./boot')

class App {
  constructor() {
    this.app = express();
    this.configureMiddleware();
    this.configureRoutes();
  }

  configureMiddleware() {
    boot(this.app)
  }

  configureRoutes() {
    this.app.use(JobRoutes);
  }

  start(port) {
    this.app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
}

module.exports = App;
