var game = require('../schemas/game');

exports.getGames = {
  handler: function(request, reply){
    var games = game.find({});
    reply(games);
}
}

exports.getGame = {
  handler: function(request, reply){
    var games = game.find({_id:request.params.gameId});
    reply(games);
  }
}

exports.createGame = {
  handler: function(request, reply){
    var newGame = new game({
      isbn: request.payload.isbn,
      title : request.payload.title,
      rating : request.payload.rating,
      developer : request.payload.developer,
    });
    newGame.save();
    console.log('Game saved');
    reply(newGame);
  }
}

exports.updateGame = {
  handler: function(request, reply){
    game.update({_id : request.params.gameId},
      {isbn: request.payload.isbn,
      title : request.payload.title,
      rating : request.payload.rating,
      developer : request.payload.developer,}).exec();
    reply("ok");
}}

exports.deleteGame = {
  handler: function(request, reply){
    game.find({_id: request.params.gameId}).remove().exec();
    reply("ok");
}}
