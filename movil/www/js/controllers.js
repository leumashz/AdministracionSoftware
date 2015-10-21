angular.module('controllers', [])

.controller('LoginCtrl', function($scope) {

})





.controller('PlatillosCtrl', function($scope,$http) {
/*    platilloService.getPlatillos().then(function(platillos){
    $scope.platillos = platillos;
	});*/

  $http.get('http://localhost:3000/platillos').success(function(response) {
          console.log(response.data);
      });

});
