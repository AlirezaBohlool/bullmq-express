const express = require('express');
const JobController = require('../controllers/jobController');

class JobRoutes {
  constructor() {
    this.router = express.Router();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post('/incoming', JobController.addJob);
  }
}

module.exports = new JobRoutes().router;
