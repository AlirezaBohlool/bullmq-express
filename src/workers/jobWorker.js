
const { Worker } = require('bullmq');
const axios = require('axios');

const worker = new Worker('myQueue', async (job) => {
  const { id, userid } = job.data;
  
  console.log(`Processing job with id: ${id}, userid: ${userid}`);

  await axios.post('http://localhost:3000/outcoming', { id, userid });

  console.log(`Job with id: ${id}, userid: ${userid} has been processed`);
}, {
  connection: {
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT || 6379
  }
});

worker.on('completed', (job) => {
  console.log(`Job ${job.id} has been completed`);
});

worker.on('failed', (job, err) => {
  console.error(`Job ${job.id} failed with error: ${err.message}`);
});