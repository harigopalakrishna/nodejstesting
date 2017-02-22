const request = require('request')

function Fetcher (options) {

}

Fetcher.prototype.getHeaders = function (url, done) {
  request.get(url, function (err, response) {
    if (err) {
      return done(err)
    }

    done(null, response.headers)
  })
}

module.exports.create = function (options) {
  return new Fetcher(options)
}
