const redis = require('redis');

const host = 'http://localhost';
const port = 6379;
const client = redis.createClient(port, host);

module.export = client;