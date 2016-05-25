var mongoose = require('mongoose');

var GameSchema = new mongoose.Schema({
  isbn : Number,
  title : String,
  rating : String,
  developer : String,
});

module.exports = mongoose.model('Game', GameSchema);
