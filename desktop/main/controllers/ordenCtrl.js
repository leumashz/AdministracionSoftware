angular.module('ordenCtrl', ['ordenService','authService', 'menuService', 'usuarioService'])

.controller('ordenController', function($scope,Orden) {

	Orden.all().success(function(data) {
				$scope.ordenes = data;
	});


	$scope.eliminarOrden = function(id) {
		Orden.delete(id)
			.success(function (data){
				Orden.all()
					.success(function (data) {
						$scope.ordenes = data;
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
.controller('ordenEditController', function($scope,$routeParams, Orden, Usuario) {

	Orden.get($routeParams.id)
		.success(function(data) {
			$scope.ordenData = data;
			Usuario.get($scope.ordenData.id_usuario)
				.success(function(data) {
				$scope.usuarioOrden = data;
				$scope.platillosOrden = [];

				for(var i = 0; i < $scope.ordenData.platillos.length; i++){
					Menu.get($scope.ordenData.platillos[i])
						.success(function(data){
							$scope.platillosOrden.push(data);
						});
				}
			});
		});

	// function to save the user
	$scope.saveOrden = function() {
		$scope.message = '';

		Orden.update($routeParams.id, $scope.ordenData)
			.success(function(data) {
				//$scope.ordenData = {};
				//$scope.message = data.message;
				//console.log($scope.message);
			});
	};

	$scope.enProceso = function(){
		console.log('si entro');
		//$scope.ordenActual = $scope.ordenData;
		$scope.ordenData.estado = 2;

		Orden.update($routeParams.id, $scope.ordenData)
			.success(function(data) {
				console.log('si cambio el estado');
			});
	};

	$scope.terminar = function(){
		console.log('si entro');
		//$scope.ordenActual = $scope.ordenData;
		$scope.ordenData.estado = 3;

		Orden.update($routeParams.id, $scope.ordenData)
			.success(function(data) {
				console.log('si cambio el estado');
			});
	};

});
