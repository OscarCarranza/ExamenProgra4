var ingredient = require('../schemas/ingredient');

exports.getIngredients = {
  handler: function(request, reply){
    var ingredients = ingredient.find({});
    reply(ingredients);
}
}

exports.getIngredient = {
  handler: function(request, reply){
    var ingredients = ingredient.find({_id:request.params.ingredientId});
    reply(ingredients);
  }
}

exports.createIngredient = {
  handler: function(request, reply){
    var newIngredient = new ingredient({
      name : request.payload.name,
      description : request.payload.description,
    });
    newProduct.save();
    console.log('Ingredient created');
    reply(newIngredient);
  }
}


exports.deleteIngredient = {
  handler: function(request, reply){
    ingredient.find({_id: request.params.ingredientId}).remove().exec();
    reply("Ingredient deleted");
}}
