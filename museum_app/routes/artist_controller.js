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
  });

router.route('/create')
  .get((req, res) =>{
    Artist.find({name: 'arty'},(err, artist_data) =>{
      if (err) throw err;
      console.log(artist_data);
      res.send(artist_data);
    });
  })

  .post((req, res) =>{
    //create a new artist

    let arty = new Artist({
      name: 'arty',
      img_url: 'thing.thing' ,
      nationality: 'algeria',
      birthYear: 2016,
      description: 'chill dude for a fetus'
    });

    arty.save();
  });

  module.exports = router;
