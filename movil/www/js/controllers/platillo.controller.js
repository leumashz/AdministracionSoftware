angular
  .module('ionicApp')
  .controller('platilloCtrl',PlatilloCtrl);



  function PlatilloCtrl($scope,$stateParams,platilloService,carritoService,$location) {

    platilloService.getPlatillo($stateParams.idPlatillo).then(function(platillo){
  		$scope.platillo = platillo;
      $scope.ratings = [{
          current: platillo.rating,
          max: 5
      }];
  	});

    $scope.agregarCarrito = function (platillo) {
      var menuCarrito = carritoService.getCarrito();
      console.log(menuCarrito);
      if(menuCarrito==null){
        menuCarrito = [];
      }
      menuCarrito.push(platillo);
      carritoService.setCarrito(menuCarrito);
      $location.path("#/tab/menu");
    };


  }
