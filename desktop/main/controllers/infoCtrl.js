angular.module('infoCtrl', ['menuService', 'authService'])

.controller('infoController', function($scope,Info){
	Info.all()
		.success(function(data){
			$scope.info = data;
		});
})

.controller('infoAddController', function($scope,Info){

	vm.saveUser = function() {
		$scope.processing = true;
		$scope.message = '';

		// use the create function in the userService
		Info.create($scope.infoData)
			.success(function(data) {
				//$scope.infoData = {};
				//$scope.message = data.message;
			});
			
	};	
})

.controller('infoEditController', function($scope, $routeParams, Info){
	Info.get($routeParams.id)
		.success(function(data) {
			$scope.infoData = data;
		});

	$scope.saveInfo = function() {
		$scope.message = '';

		Info.update($routeParams.id, $scope.infoData)
			.success(function(data){
				//algo
			});
	};
});