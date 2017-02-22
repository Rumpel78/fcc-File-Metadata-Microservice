var express = require('express')
var multer  = require('multer')
var storage = multer.memoryStorage()
var upload = multer({ storage: storage })

var app = express()
var port = process.env.PORT || 8080;

app.use(express.static('public'));

app.post('/upload', upload.single('file'), function(req, res){
    var size = req.file.size;
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify({ size: size }))
    res.end()
});

app.listen(port, function () {
  console.log('App listening on port '+port)
})
