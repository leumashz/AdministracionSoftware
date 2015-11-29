angular.module('infoCtrl', ['menuService', 'authService'])

.controller('infoController', function($scope,Info){
	Info.all()
		.success(function(data){
			$scope.info = data;
			console.log($scope.info.length);
		});
})

.controller('infoCreateController', function($scope,Info){

	$scope.saveInfo = function() {
		$scope.processing = true;
		$scope.message = '';

		Info.create($scope.infoData)
			.success(function(data) {
				$scope.infoData = {};
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