const express = require('express')

const app = express()

app.get('/users', function (req, res) {
  res.json({
    id: 1
  })
})

module.exports = app
