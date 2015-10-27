angular
  .module('ionicApp')
  .controller('carritoCtrl',CarritoCtrl);



 function CarritoCtrl ($scope,carritoService, $ionicPopup, $timeout) {

   $scope.$on('$ionicView.beforeEnter',function () {
     $scope.menu = carritoService.getCarrito();
   });

    $scope.data = {
      showDelete: false
    };

    $scope.eliminarPlatillo = function (platillo) {
      $scope.menu.splice($scope.menu.indexOf(platillo), 1);
      carritoService.setCarrito($scope.menu);

    };

  }
