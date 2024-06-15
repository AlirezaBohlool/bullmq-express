const JobService = require('../services/JobService');

class JobController {
  static async addJob(req, res) {
    try {
      const { id, userid } = req.body;
      console.log(req.body)
      if (!id || !userid) {
        return res.status(400).send('id and userid are required');
      }
      await JobService.addJob({ id, userid });
      res.status(200).send('Job added to the queue');
      
    } catch (error) {
      res.status(500).send('Job didnt add');
    }
  }
}

module.exports = JobController;

