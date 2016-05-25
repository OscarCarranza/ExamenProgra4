angular.module('AngularScaffold.Controllers')
  .controller('HomeController', ['$scope', 'HomeService', '$sessionStorage', function ($scope, HomeService, $sessionStorage) {
    	$scope.title = "Tabla of ingredients"
      $scope.exampleObject = {text: "WELCOME"}
      $scope.ingredients = [];
      $scope.ingredient = {};

      $scope.getIngredients = function(){
        HomeService.GetIngredients().then(function(response){
          $scope.ingredients = response.data;
          console.log($scope.ingredients);
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message)
        });
      }

      $scope.postIngredients = function(){
        HomeService.PostIngredients($scope.ingredient).then(function(response){
          alert("Posted to ingredients");
          $scope.getIngredients();
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        });
      }

      $scope.isAdmin = function(){
        return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('admin') > -1;
      }

      $scope.isRegular = function(){
        return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('regular') > -1;
      }

  }]);
