var product = require('../schemas/product');

exports.getProducts = {
  handler: function(request, reply){
    var products = product.find({});
    reply(products);
}
}

exports.getProduct = {
  handler: function(request, reply){
    var products = product.find({_id:request.params.productId});
    reply(products);
  }
}

exports.createProduct = {
  handler: function(request, reply){
    var newProduct= new product({
      name : request.payload.name,
      description : request.payload.description,
    });
    newProduct.save();
    console.log('Product created');
    reply(newProduct);
  }
}


exports.deleteProduct = {
  handler: function(request, reply){
    product.find({_id: request.params.productId}).remove().exec();
    reply("Product deleted");
}}
