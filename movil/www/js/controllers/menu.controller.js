angular
  .module('ionicApp')
  .controller('MenuCtrl',MenuCtrl);


  function MenuCtrl ($scope,menuService) {
    menuService.getMenu().then(function(menu){
  		$scope.menu = menu;
  	});
  }
