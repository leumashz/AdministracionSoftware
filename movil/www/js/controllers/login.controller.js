angular
  .module('ionicApp')
  .controller('loginCtrl',LoginCtrl);


  function LoginCtrl($scope,$rootScope, $location,$ionicPopup, Auth,Info) {
      	$scope.loggedIn = Auth.isLoggedIn();

        Info.all()
          .success(function(data){
            console.log(data);
            $scope.info= data[0];
          });


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
