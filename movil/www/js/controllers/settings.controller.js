angular
  .module('ionicApp')
  .controller('settingsCtrl',SettingsCtrl);

  function SettingsCtrl($scope,$rootScope, $location, Auth) {
    console.log('Entro');
    $scope.doLogout = function() {
      Auth.logout();
      $scope.usuario = {};
      $location.path('login');
    };
  }
