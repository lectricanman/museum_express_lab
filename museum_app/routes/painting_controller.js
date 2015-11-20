'use strict';
let express = require('express');
let router = express.Router();
let Painting = require('../models/paintings');

/* finds all paintings */
router.route('/')
  .get((req, res, next) =>{
    Painting.find(null, (err, painting_data) =>{
      if (err) throw err;
      res.send(painting_data);
    });
  });

/* creates a painting object */
router.route('/paintings/create')
  .post((req, res) => {
    let newPainting = new Painting ({
      title: req.body.title,
      img_url: req.body.img_url,
      year_made: req.body.year_made
    });
    newPainting.save();
    console.log('Painting created!');
  });

/* destroys a painting object */
router.route('/paintings/:id')
  .delete((err, user) => {
    let deletePainting = Painting.findOneAndRemove({
      _id: req.params.id
    });
  if (err) {
    console.log(err);
  } else {
    res.send(painting_data);
    console.log('Painting deleted!');
  }
});

module.exports = router;
