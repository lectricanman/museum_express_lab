'use strict';
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let logger = require('morgan');

let artists = require('./routes/artist_controller.js');
let paintings = require('./routes/painting_controller.js');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static('public'));

let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/museumrApp');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', (callback) => {
  console.log('mongoose connected');
});

app.use('/paintings', paintings);
app.use('/artists', artists);
app.use('/', artists);


let server = app.listen(3000, () => {
  let host = server.address().address;
  let port = server.address().port;

  console.log('express running', host, port);
});
// app.use(bodyPArser.urlencoded({ extended: true }));
// app.use(bodyParser.json());



app.set('port', 3000);
app.use(express.static('public'));

// server.listen(app.get('port'), function() {
// 	console.log("Museum app is running at localhost:" + app.get('port'));
// });
