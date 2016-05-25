var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  name: String,
  description : String,
  //lista de ingredients
});

module.exports = mongoose.model('Product', ProductSchema);
