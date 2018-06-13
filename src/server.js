var express = require('express')
var multer = require('multer')
var storage = multer.memoryStorage()
var upload = multer({ storage: storage })

var app = express()
var port = process.env.PORT || 8080;

app.use(express.static('public'));

app.set('view engine', 'pug');

var mainRouter = express.Router();
var basePath = process.env.BASEPATH || '';
app.use(basePath, mainRouter);

mainRouter.get('/', function (req, res) {
  var baseUrl = req.protocol + '://' + req.hostname;
  res.render('index', { baseUrl, basePath });
});

mainRouter.post('/upload', upload.single('file'), function (req, res) {
  var size = req.file.size;
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify({ size: size }))
  res.end()
});

app.listen(port, function () {
  console.log('App listening on port ' + port)
})
