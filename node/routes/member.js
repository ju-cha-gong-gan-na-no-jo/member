const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.get('/', (req, res) => {
  res.send('member server is running...')
})

module.exports = app;