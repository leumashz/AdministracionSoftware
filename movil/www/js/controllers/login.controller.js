angular
  .module('ionicApp')
  .controller('loginCtrl',LoginCtrl);


  function LoginCtrl($scope,$rootScope, $location, Auth) {
      	$scope.loggedIn = Auth.isLoggedIn();


      	$rootScope.$on('$routeChangeStart', function() {
      		Auth.getUsuario()
      			.then(function (data) {
      				$scope.usuario = data;

      			});
      	});

      	$scope.doLogin = function(email,password) {
      		Auth.login(email,password)
      			.success(function (data) {
      				if(data.success)
      					$location.path('/tab/home');
      				else{
      					//$scope.error = data.message;
                console.log(data.message);
              }
      			});
      	};
  }
