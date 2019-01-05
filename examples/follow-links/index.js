const { queries, utils } = require('../..');
const axios = require('axios');
const apiUrl = 'https://moveablejsonapi.glitch.me';

// Allow for changing examples through command line
const exampleId = process.argv[2] || 'example1';

async function api() {
  const api = await axios.get(apiUrl);
  const example = api.data[exampleId];
  const orders = queries.getProperty(example, 'order');
  for await (let order of orders) {
    console.log(order);
  }
}

api();
