angular
  .module('ionicApp')
  .controller('loginCtrl',LoginCtrl);


  function LoginCtrl($scope,$rootScope, $location,$ionicPopup, Auth) {
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
      				if(data.success){
                $location.path('/tab/home');
              }
      				else{
                var alertPopup = $ionicPopup.alert({template: data.message});
              }
      			});
      	};
  }
