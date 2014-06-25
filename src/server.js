var express = require('express')
var path = require('path')
var app = express()

app.use(express.static(path.join(__dirname, '../static')));
app.get('/', function(req, res) {
    res.end('Hello World!')
})
app.listen(3456)
