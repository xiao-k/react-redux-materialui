import path from 'path';
import express from 'express';
import webpack from 'webpack';
import config from '../webpack.config.js';
import db from './db';
import bodyParser from 'body-parser';

var app = express();
var compiler = webpack(config);

db.connect();

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('public'));

// Access to DB controllers
const sampleController = db.controllers && db.controllers.Sample;
if (sampleController) {
  app.post('/find', sampleController.find);
  app.post('/add', sampleController.add);
}

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});
