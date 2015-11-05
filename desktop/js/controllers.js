
app.controller('menuController', ['$scope', 'menuService', function($scope,menuService){
		menuService.all().success(function(data) {
			$scope.menu = data;
		});

		$scope.deletePlatillo = function(id) {
			menuService.delete(id)
				.success(function (data){
					menuService.all()
						.success(function (data) {
							$scope.menu = data;
								
						});
						
				});
		};
}]);

app.controller('addPlatilloController',['$scope','menuService', function($scope,menuService){
	

	$scope.guardarPlatillo = function() {
		$scope.proceso = true;
		$scope.mensaje = '';

		menuService.create($scope.platilloData)
			.success(function(data) {
				$scope.proceso = false;
				$scope.platilloData = {};
				$scope.mensaje = data.message;
				
			});
	};
}]);

app.controller('editPlatilloController',['$scope','$routeParams','menuService', function($scope,$routeParams,menuService){
	menuService.get($routeParams.id)
		.success(function(data) {
			$scope.platilloData = data;	
		});

	$scope.guardarPlatillo = function() {
		menuService.update($routeParams.id, $scope.data)
			.success(function(data) {
				$scope.platilloData = {};
			});
	};
}]);

app.controller('ordenController', ['$scope','menuService','ordenService',function($scope,menuService,ordenService){
	menuService.all().success(function(data) {
			$scope.menu = data;
	});
	
}]);