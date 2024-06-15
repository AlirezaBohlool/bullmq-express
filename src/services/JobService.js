const JobQueue = require('../queues/jobQueue');

class JobService {
  static async addJob(jobData) {
    await JobQueue.add('myJob', jobData);
  }
}

module.exports = JobService;
