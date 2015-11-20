'use strict';
let express = require('express');
let router = express.Router();
let Artist = require('../models/artists');

router.route('/')
  .get((req, res, next) => {
    console.log('hit /');
    //find artists - sends all artists
    Artist.find(null, (err, artist_data) =>{
      if (err) throw err;
      res.send(artist_data);
    });
  });

 router.route('/create')
//   .get((req, res) =>{
//     Artist.find({name: 'arty'},(err, artist_data) =>{
//       if (err) throw err;
//       console.log(artist_data);
//       res.send(artist_data);
//     });
//   })

  .post((req, res) =>{
    console.log('hit /create');
    //create a new artist
    let artyParams = req.body.params;
    let arty = new Artist(artyParams);
      // this would go inside new Artist arguments but this is better.
      //{
      // name: req.body.name,
      // img_url: req.body.img_url ,
      // nationality: req.body.nationality,
      // birthYear: req.body.birthYear,
      // description: req.body.description
      //}


    arty.save();
  });

  router.route('/artists/:id')
    .get((req, res) => {
      console.log('hit get /artists/:id');
      Artist.find({_id: req.params.id}, (err, artist_data) =>{
        if (err) throw err;
        console.log(artist_data);
        res.send(artist_data);
      });
    })

    .post((req, res) => {
      console.log('hit post /artists/:id');
      let artyParams = req.body.params;
      Artist.update({_id: req.body.id}, artyParams, (err, artist_data) =>{
        if (err) throw err;
        console.log(artist_data);
        res.send(artist_data);
      });
    })

    .delete((req, res) =>{
      console.log('hit delete /artists/:id');
      let artyParams = req.body.params;
      Artist.remove({_id: req.body.id}, true, (err, artist_data) =>{
        if (err) throw err;
        console.log(artist_data);
        res.send(artist_data);
      });
    });

  module.exports = router;
