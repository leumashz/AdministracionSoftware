angular.module('controllers', [])

//////////////////////////MenuCtrl///////////////////////
.controller('MenuCtrl', function($scope,menuService) {
  menuService.getMenu().then(function(menu){
		$scope.menu = menu;
	});
})
///////////////////PlatilloCtrl//////////////////////
.controller('PlatilloCtrl',function ($scope,$stateParams,platilloService) {

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
    var menuCarrito = JSON.parse(window.localStorage.getItem("menuCarrito"));
    if(menuCarrito==null){
      menuCarrito = [];
    }
    menuCarrito.push(platillo);
    window.localStorage.setItem("menuCarrito", JSON.stringify( menuCarrito));
    console.log(JSON.parse(window.localStorage.getItem("menuCarrito")));
    //window.localStorage.removeItem("menuCarrito");//Comentalo
  };


})
////////////////////CarritoCtrl///////////////////////////////////////
.controller('CarritoCtrl', function($scope) {
  $scope.menu = JSON.parse(window.localStorage.getItem("menuCarrito"));




















});
