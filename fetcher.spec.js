const sinon = require('sinon')
const request = require('request')
const expect = require('chai').expect

const Fetcher = require('./fetcher')

describe('Fetcher', function() {
  it('#getHeaders', function (done) {
    const fetcher = Fetcher.create()
    const sandbox = sinon.sandbox.create()
    sandbox.stub(request, 'get', function (url, cb) {
      cb(null, {
        headers: {
          'someheader': 'somevalue'
        }
      })
    })

    fetcher.getHeaders('http://some.url', function (err, data) {
      expect(data).to.eql({
        'someheader': 'somevalue'
      })
      done()
    })

    sandbox.restore()
  })

  it('#getData')
})
