angular.module('controllers', [])

//////////////////////////MenuCtrl///////////////////////
.controller('MenuCtrl', function($scope,menuService) {
  menuService.getMenu().then(function(menu){
		$scope.menu = menu;
	});
})







///////////////////PlatilloCtrl//////////////////////
.controller('PlatilloCtrl',function ($scope,$stateParams,platilloService,carritoService) {

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


})


////////////////////CarritoCtrl///////////////////////////////////////
.controller('CarritoCtrl', function($scope,carritoService) {
  $scope.menu = carritoService.getCarrito();
  $scope.data = {
    showDelete: false
  };
  $scope.eliminarPlatillo = function (platillo) {
    $scope.menu.splice($scope.menu.indexOf(platillo), 1);
    carritoService.setCarrito( $scope.menu);

  };

});
