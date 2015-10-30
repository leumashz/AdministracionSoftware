angular
  .module('ionicApp')
  .controller('carritoCtrl',CarritoCtrl);



 function CarritoCtrl ($scope,carritoService, $ionicPopup, $location,$ionicHistory) {

   $scope.$on('$ionicView.beforeEnter',function () {
     var menu = carritoService.getCarrito();
     if(menu.length){
        $scope.menu = menu;
     }else{
       var alertPopup = $ionicPopup.alert({
           title: 'Carrito vacio!!',
         template: 'Tiene que agregar previamente algo al carrito desde el menu :('
       });
       alertPopup.then(function(res) {
            $location.path("#/tab/menu");
            //console.log($ionicHistory.viewHistory());
        });


     }

   });

    $scope.data = {
      showDelete: false
    };

    $scope.eliminarPlatillo = function (platillo) {
      $scope.menu.splice($scope.menu.indexOf(platillo), 1);
      carritoService.setCarrito($scope.menu);

    };

  }
