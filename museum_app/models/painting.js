var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var paintingSchema = new Schema ({
  title: String,
  img_url: String,
  year_made: Date
});

var Painting = mongoose.model('Painting', paintingSchema);

module.exports = Painting;


// Set up the Mongoose models for the artist and painting collections.
//
// Artist
//
// An Artist should have the following attributes:
//
// name
// img_url
// nationality
// birthYear
// description
// Painting
//
// A Painting should have the following attributes:
//
// title
// img_url
// year_made
