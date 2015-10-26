angular
  .module('ionicApp')
  .controller('CompraCtrl',CompraCtrl);


  function CompraCtrl($scope,carritoService) {
    $scope.CurrentDate = new Date();
    var menu = carritoService.getCarrito();
    $scope.precioTotal = 0;





    for (var i = 0; i < menu.length; i++) {
      $scope.precioTotal+= menu[i].precio;
    }




  };
