const _ = require('lodash');

// Convert an async generator into an array
exports.expandValues = expandValues = async function expandValues(gen) {
  let items = [];
  for await (const item of gen) {
    items.push(item);
  }
  return items
}

exports.expandObject = async function expandObject(obj) {
  let result = {};

  for (let key in obj) {
    let value = obj[key];
    result[key] = [];

    // The value will always be an AsyncGenerator
    for await (let item of value) {
      if (_.isPlainObject(item)) {
        result[key].push(await expandObject(item));
      } else {
        result[key].push(item);
      }
    }
  }

  return result;
}
