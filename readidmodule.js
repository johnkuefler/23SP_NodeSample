const url = require('url');

exports.getId = function (req) {
  let queryString = url.parse(req.url, true).query;
  return queryString.id;
};
