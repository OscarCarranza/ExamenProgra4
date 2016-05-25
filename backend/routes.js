var usersController = require('./controllers/usersController');
var authController = require('./controllers/authController');
var ingController = require('./controllers/ingredientController');


exports.endpoints = [{method: 'GET', path: '/', config: {handler: function(request, reply){reply('API v1, ingredients')}}},

	{method: 'POST', path: '/v1/register', config: usersController.createUser},
	{method: 'POST', path: '/v1/login', config: authController.login},
	{method: 'GET', path: '/v1/logout', config: authController.logout},

	{method: 'POST', path: '/v1/createIngredient', config: ingController.createIngredient},
	{method: 'DELETE', path: '/v1/deleteIngredient/{ingredientId}', config: ingController.deleteIngredient},
	{method: 'GET', path: '/v1/ingredients', config: ingController.getIngredients},
	{method: 'GET', path: '/v1/getIngredient/{ingredientId}', config: ingController.getIngredient},

	{method: 'POST', path: '/v1/createProduct', config: productController.productIngredient},
	{method: 'DELETE', path: '/v1/deleteProduct/{productId}', config: productController.deleteProduct},
	{method: 'GET', path: '/v1/products', config: productController.getProducts},
	{method: 'GET', path: '/v1/getProduct/{productId}', config: productController.getProduct},
];
