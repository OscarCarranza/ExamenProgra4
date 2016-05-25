angular.module('AngularScaffold.Services').factory('HomeService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'http://localhost:8000/';
		return {

				PostIngredients: function(payload){
					return $http.post(baseUrl + "v1/createIngredient", payload);
				},
				GetIngredient: function(param){
					return $http.get(baseUrl + "v1/getIngredient/" + param);
				},
				GetIngredients: function(){
					return $http.get(baseUrl + "v1/ingredients");
				},
				DeleteIngredient: function(param){
					return $http.delete(baseUrl + "v1/deleteIngredient/" + param);
				}
	    };
}]);
