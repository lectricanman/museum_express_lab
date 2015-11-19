'use strict';
let express = require('express');
let router = express.Router();
let Artist = require('../models/artists');

router.route('/')
  .get((req, res, next) => {
    //find artists - sends all artists
    Artist.find(null, (err, artist_data) =>{
      if (err) throw err;
      res.send(artist_data);
    });
  })

  module.exports = router;
