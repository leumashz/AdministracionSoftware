angular.module('ordenCtrl', ['ordenService','authService', 'menuService'])

.controller('ordenController', function($scope,Orden) {

	Orden.all().success(function(data) {
				$scope.ordenes = data;
	});


	$scope.eliminarOrden = function(id) {
		Orden.delete(id)
			.success(function (data){
				Menu.all()
					.success(function (data) {
						$scope.menu = data;
					});
			});
			
		};

		//$scope.saludo = 'hola';
})

.controller('ordenCreateController', function($scope,Menu,Orden) {
    
	Menu.all().success(function(data) {
				$scope.menu = data;
	});

	var ordenTemp = {};

	$scope.agregar = function () {
			
	}

    $scope.saveOrden = function() {
		$scope.message = '';

		Orden.create($scope.ordenData)
			.success(function(data) {
				$scope.ordenData = {};
				$scope.message = data.message;
			});
			
	};

	
})

// controller applied to user edit page
.controller('ordenEditController', function($scope,$routeParams, Menu) {

	/*Menu.get($routeParams.id)
		.success(function(data) {
			$scope.platilloData = data;
		});

	// function to save the user
	$scope.savePlatillo = function() {
		$scope.message = '';

		// call the userService function to update 
		Menu.update($routeParams.id, $scope.platilloData)
			.success(function(data) {
				//$scope.platilloData = {};
				//$scope.message = data.message;
				//console.log($scope.message);
			});
	};*/

});