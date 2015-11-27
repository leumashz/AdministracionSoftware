angular.module('menuCtrl', ['menuService','authService'])

.controller('menuController', function($scope,Menu) {
	//$scope.place = 'verMenu';

	Menu.all().success(function(data) {
				$scope.menu = data;
	});


	$scope.eliminarPlatillo = function(id) {
		Menu.delete(id)
			.success(function (data){
				Menu.all()
					.success(function (data) {
						$scope.menu = data;
					});
			});
			
		};

})

.controller('platilloCreateController', function($scope,Menu) {
     
    

})

// controller applied to user edit page
.controller('platilloEditController', function($scope,$routeParams, Menu) {

	Menu.get($routeParams.id)
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
	};

});