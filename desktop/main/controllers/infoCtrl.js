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