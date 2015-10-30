angular
  .module('ionicApp')
  .controller('carritoCtrl',CarritoCtrl);



 function CarritoCtrl ($scope,carritoService, $ionicPopup, $location,$ionicHistory,$state) {
    var menu = carritoService.getCarrito();
   $scope.$on('$ionicView.beforeEnter',function () {

     if(menu!=null){
        $scope.menu = menu;
     }else{
       var alertPopup = $ionicPopup.alert({
           title: 'Carrito vacio!!',
         template: 'Tiene que agregar previamente algo al carrito desde el menu :('
       });
       alertPopup.then(function(res) {
         $state.go('tab.home', {cache: false})
        });


     }

   });

    $scope.data = {
      showDelete: false
      //,numeroCarrito : menu.length
    };

    $scope.eliminarPlatillo = function (platillo) {
      $scope.menu.splice($scope.menu.indexOf(platillo), 1);
      carritoService.setCarrito($scope.menu);

    };

  }
