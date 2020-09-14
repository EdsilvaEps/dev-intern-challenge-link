const express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
const fs = require('fs');

const app = express();

let rawdata = fs.readFileSync('../src/Assets/urls.json');
let urls = JSON.parse(rawdata);
// app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

console.log(urls);
//app.use('/urls', urls);

router.get('/', (req, res) => {
  res.json(urls);
});

router.get('/links', (req, res) => {
  var obj = {
    data: urls
  }

  res.json(obj);
  console.log(objs);
});

const PORT = 8000;
const HOST = 'localhost';

app.listen(PORT, () => {
  console.log('servidor escutando em http://', HOST, PORT)
})
