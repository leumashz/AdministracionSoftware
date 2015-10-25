angular
  .module('ionicApp')
  .controller('PlatilloCtrl',PlatilloCtrl);



  function PlatilloCtrl($scope,$stateParams,platilloService,carritoService) {

    platilloService.getPlatillo($stateParams.idPlatillo).then(function(platillo){
  		$scope.platillo = platillo;
      $scope.ratings = [{
          current: platillo.rating,
          max: 5
      }];
  	});

    $scope.agregarCarrito = function (platillo) {
      /*window.localStorage.setItem("username", 'Luis');
      console.log(window.localStorage.getItem("username"));
      window.localStorage.removeItem("username");*/
      var menuCarrito = carritoService.getCarrito();
      console.log(menuCarrito);
      if(menuCarrito==null){
        menuCarrito = [];
      }
      menuCarrito.push(platillo);
      carritoService.setCarrito(menuCarrito);
      //console.log(JSON.parse(window.localStorage.getItem("menuCarrito")));
      //window.localStorage.removeItem("menuCarrito");//Comentalo
    };


  }
