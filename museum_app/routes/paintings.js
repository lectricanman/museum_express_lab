'use strict';
let express = require('express');
let router = express.Router();
let Painting = require('../models/painting');

router.route('/')
  .get((req, res, next) =>{
    //find paintings - sends all paintings
    Painting.find(null, (err, painting_data) =>{
      if (err) throw err;
      res.send(painting_data);
    });

  })

  module.exports = router;
