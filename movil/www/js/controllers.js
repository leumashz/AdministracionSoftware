angular.module('controllers', [])

<<<<<<< HEAD

.controller('MenuCtrl', function($scope,menuService) {
  menuService.getMenu().then(function(menu){
		$scope.menu = menu;
	});
})

.controller('PlatilloCtrl',function ($scope,$stateParams,platilloService) {
  platilloService.getPlatillo($stateParams.idPlatillo).then(function(platillo){
		$scope.platillo = platillo;
	});
  $scope.ratings = [{
      current: 5,
      max: 10
  }, {
      current: 3,
      max: 5
  }];  
=======
.controller('LoginCtrl', function($scope) {

})





.controller('PlatillosCtrl', function($scope,$http) {
/*    platilloService.getPlatillos().then(function(platillos){
    $scope.platillos = platillos;
	});*/

  $http.get('http://localhost:3000/platillos').success(function(response) {
          console.log(response.data);
      });

>>>>>>> parent of 65c5960... Se comprobo CORS en el Servidor
});
