angular
  .module('ionicApp')
  .controller('registerCtrl',RegisterCtrl);

  function RegisterCtrl($scope,usuarioService,$location,$ionicPopup) {
    $scope.saveUser = function (usuarioData) {
      $scope.message = '';

       usuarioService.create(usuarioData)
        .success(function(data) {
           if (data.message.indexOf("success") !=-1) {
                var alertPopup = $ionicPopup.alert({template: 'Registro Exitoso'});
                alertPopup.then(function(res) {$location.path('login');});
              }else{
                var alertPopup = $ionicPopup.alert({template: 'Error'});
              }
        });
    }
  }
