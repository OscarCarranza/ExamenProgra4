var mongoose = require('mongoose');

var IngredientSchema = new mongoose.Schema({
  name: String,
  description : String,
});

module.exports = mongoose.model('Ingredient', IngredientSchema);
