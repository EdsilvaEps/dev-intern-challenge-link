const express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
const fs = require('fs');
const cors = require('cors');

const app = express();

let rawdata = fs.readFileSync('../src/Assets/urls.json');
let urls = JSON.parse(rawdata);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
//console.log(urls);
//app.use('/urls', urls);

function getFiveBest(){
  let topFive = urls;

  topFive.sort((a,b) =>{
    return b.hits - a.hits;
  });

  topFive = topFive.slice(0,5);

  return topFive;

}

function getTotalHits(){
  let total = 0;

  urls.forEach((link) => {
    total += link.hits;

  });

  return total;

}

getFiveBest();
getTotalHits();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.json(urls);
});

app.get('/links', (req, res) => {
  var topfive = getFiveBest();
  var obj = {
    data: topfive
  }

  res.json(obj);
});

app.get('/hits', (req, res) => {
  var totalHits = getTotalHits();
  var obj = {
    hits: totalHits
  }

  res.json(obj);
});

const PORT = 8000;
const HOST = 'localhost';

app.listen(PORT, () => {
  console.log('servidor escutando em http://%s:%s', HOST, PORT)
})
