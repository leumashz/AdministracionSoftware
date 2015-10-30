angular
  .module('ionicApp')
  .controller('compraCtrl',CompraCtrl);


  function CompraCtrl($scope,carritoService,$filter,compraService,$ionicPopup ) {
    $scope.CurrentDate = new Date();

    var menu = carritoService.getCarrito();
    $scope.NumeroPlatillos = menu.length;
    $scope.precioTotal = 0;

    for (var i = 0; i < menu.length; i++) {
      $scope.precioTotal+= menu[i].precio;
    }

   var compraJSON = {
      'estado' : 120394,
      'id_usuario': 2,
      'platilos' :  menu,
      'fecha' :  $filter('date')(new Date(), "medium"),
      'total' : $scope.precioTotal,
      'tipo' : 1
    }

    $scope.pedirOrden = function () {
      //compraService.postCompra(JSON.stringify(compraJSON));
      var alertPopup = $ionicPopup.alert({
        title: 'Compra Exitosa!',
        template: 'Gracias por su compra :)'
      });
    }
  };
