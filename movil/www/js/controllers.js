angular.module('controllers', [])
.controller('PlatillosCtrl', function($scope,platilloService) {
  platilloService.getPlatillos().then(function(users){
		$scope.platillos = users;
	});
});
