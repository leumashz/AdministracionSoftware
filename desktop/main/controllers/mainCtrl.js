angular.module('mainCtrl', ['ordenService', 'authService'])

.controller('mainController', function($scope,$rootScope, $location, Auth, Usuario, Menu) {
	//$scope.place = $location.path();;
	//console.log($scope.place);
	
	$scope.loggedIn = Auth.isLoggedIn();

	$rootScope.$on('$routeChangeStart', function() {
		Auth.getUsuario()
			.then(function (data) {
				$scope.actual = data.data;
				console.log($scope.actual);
			});
	});

	$scope.doLogin = function() {
		Auth.login($scope.loginData.email, $scope.loginData.password)
			.success(function (data) {
				if(data.success)
					$location.path('/home');
				else
					$scope.message = data.message;
			});
	};

	$scope.doLogout = function() {
		Auth.logout();
		$scope.actual = {};
		$location.path('/');
	};


	
	/*$scope.isActive = function (viewLocation) {
     return $location.path().indexOf(viewLocation) == 0;
	}
	
	console.log($scope.isActive);*/
})

.controller('homeController', function($scope, $interval, Orden) {
	//$scope.place = 'home';

	Orden.all().success(function(data) {
				$scope.ordenes = data;
	});
	
   // $interval( function(){ $scope.callAtInterval(); }, 3000);
    //console.log($scope.place);
});

