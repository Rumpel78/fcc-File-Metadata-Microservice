var express = require('express')
var multer = require('multer')
var storage = multer.memoryStorage()
var upload = multer({ storage: storage })

var app = express()
var port = process.env.PORT || 8080;

app.use(express.static('public'));

app.set('view engine', 'pug');

app.get('/', function (req, res) {
  var mainDomain = req.hostname.substr(req.hostname.indexOf('.') + 1);
  var baseHome = req.protocol + '://' + mainDomain + ':' + port

  res.render('index', { home: baseHome });
});

app.post('/upload', upload.single('file'), function (req, res) {
  var size = req.file.size;
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify({ size: size }))
  res.end()
});

app.listen(port, function () {
  console.log('App listening on port ' + port)
})
