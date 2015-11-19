var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var artistSchema = new Schema ({
  name: String,
  img_url: String,
  nationality: String,
  birthYear: Date,
  description: String,
  Painting: []
});

var Artist = mongoose.model('Artist', artistSchema);

module.exports = Artist;



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
