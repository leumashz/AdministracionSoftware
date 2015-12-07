angular
  .module('ionicApp')
  .controller('compraCtrl',CompraCtrl);


  function CompraCtrl($scope,carritoService,$filter,compraService,$ionicPopup,$location,$state,$ionicHistory,$rootScope,Auth ) {
    var menu = carritoService.getCarrito();
    console.log(menu);
    var usuario;
    $scope.compra = {
      llevar: false ,
      descripcion : ''
    };


    $scope.$on('$ionicView.enter', function(){
      //console.log('Entro');
      Auth.getUsuario()
        .then(function (data) {
          usuario= data.data
          $scope.usuario = usuario;
          console.log(data.data);

        });
    });





    $scope.$on('$ionicView.beforeEnter',function () {

      if(menu==null){
        $state.go('tab.carrito');
      }else{
        $scope.CurrentDate = new Date();
        $scope.NumeroPlatillos = menu.length;
        $scope.precioTotal = 0;

        for (var i = 0; i < menu.length; i++) {
          $scope.precioTotal+= menu[i].precio;
        }
      }

    });




    $scope.pedirOrden = function () {
      var compraJSON = {
         'estado' : 1,
         'id_usuario': usuario._id,
         'platillos' :  menu,
         'total' : $scope.precioTotal,
         'tipo' : 1,
         'descripcion' : $scope.compra.descripcion,
         'llevar' : $scope.compra.llevar
       }
       //console.log(compraJSON);
       //return;

      compraService.postCompra(JSON.stringify(compraJSON));
      var alertPopup = $ionicPopup.alert({
        title: 'Compra Exitosa!',
        template: 'Gracias por su compra :)'
      });
      alertPopup.then(function(res) {
            carritoService.deleteCarrito();
            $state.go('tab.home');
           //$location.path("#/tab/home");
           //console.log($ionicHistory.viewHistory());
       });
    }
  };
