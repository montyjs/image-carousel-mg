//
require('dotenv').config();
const redis = require('redis');
const process = require('process');

const host = process.env.REDIS_HOST;
const port = process.env.REDIS_PORT;
const client = redis.createClient({ port, host });

module.export = client;
