app.controller('mainController', ['$scope','$rootScope', '$location', 'Auth',function($scope,$rootScope, $location, Auth){
	$scope.loggedIn = Auth.isLoggedIn();

	$rootScope.$on('$routeChangeStart', function() {
		Auth.getUsuario()
			.then(function (data) {
				$scope.usuario = data;
			});
	});

	$scope.doLogin = function() {
		Auth.login($scope.loginData.email, $scope.loginData.password)
			.success(function (data) {
				if(data.success)
					$location.path('/home');
				else
					$scope.error = data.message;
			});
	};

	$scope.doLogout = function() {
		Auth.logout();

		$scope.usuario = {};
		$location.path('/login');
	};
}])


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
			
		menuService.create($scope.platilloData)
			.success(function(data) {
				$scope.platilloData = {};
				
				
			});
	};
}]);

app.controller('editPlatilloController',['$scope','$routeParams','menuService', function($scope,$routeParams,menuService){
	menuService.get($routeParams.id)
		.success(function(data) {
			$scope.platilloData = data;	
		});

	$scope.actualizarPlatillo = function() {
		menuService.update($routeParams.id,$scope.platilloData)
			.success(function(data) {
				//console.log($routeParams.id);
				$scope.platilloData = {};
			});
	};
}]);

app.controller('ordenController', ['$scope','menuService','ordenService',function($scope,menuService,ordenService){
	menuService.all().success(function(data) {
			$scope.menu = data;
	});
	
}]);

