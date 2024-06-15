const { Queue, QueueScheduler } = require('bullmq');
const Redis = require('ioredis');

const connection = {
  host: process.env.REDIS_HOST || 'redis',
  port: process.env.REDIS_PORT || 6379
};

const jobQueue = new Queue('myQueue', { connection });

const redisClient = new Redis(connection);

redisClient.on('connect', () => {
  console.log('Successfully connected to Redis');
});

redisClient.on('error', (err) => {
  console.error('Redis connection error:', err);
});

module.exports = jobQueue;

