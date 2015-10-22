angular.module('controllers', [])


.controller('MenuCtrl', function($scope,menuService) {
  menuService.getMenu().then(function(menu){
		$scope.menu = menu;
	});
})

.controller('PlatilloCtrl',function ($scope,$stateParams,platilloService) {
  platilloService.getPlatillo($stateParams.idPlatillo).then(function(platillo){
		$scope.platillo = platillo;
    $scope.ratings = [{
        current: platillo.rating,
        max: 5
    }];
	});

});
