angular
  .module('ionicApp')
  .controller('CarritoCtrl',CarritoCtrl);



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

    /*$scope.showConfirm = function() {
      var carrito = carritoService.getCarrito();
      console.log(carrito);
      var confirmPopup = $ionicPopup.confirm({
        title: 'Comprar',
        template: 'Are you sure you want to eat this ice cream?',
        cancelText: 'Cancelar',
        okText : 'Comprar'
      });
      confirmPopup.then(function(res) {
        if(res) {
          console.log('You are sure');
        } else {
          console.log('You are not sure');
        }
      });

    };*/

  }
