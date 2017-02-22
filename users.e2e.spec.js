const request = require('supertest')
const expect = require('chai').expect
const server = require('./server')

describe('Users', function () {
  it('GET /', function (done) {
    // for POST and more docs:
    // http://visionmedia.github.io/superagent/
    request(server)
      .get('/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, function (err, data) {
        expect(data.body).to.eql({
          id: 1
        })
        done()
      })
  })
})
