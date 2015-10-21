
app.controller('PlatillosController', ['$scope', 'platillosFactory', function($scope,platillosFactory){
		platillosFactory
			.success(function (data) {
			$scope.platillos = data;
			//console.log($scope.platillos[0].nombre);
		});
	}]);