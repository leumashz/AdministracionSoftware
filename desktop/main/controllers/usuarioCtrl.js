angular.module('usuarioCtrl', ['usuarioService', 'authService'])

.controller('usuarioController', function($scope,Usuario) {
	//$scope.modo = 'verUsuarios';

	Usuario.all().success(function(data) {
				$scope.usuarios = data;
	});

	

	$scope.eliminarUsuario = function(id) {
		Usuario.delete(id)
			.success(function (data){
				Usuario.all()
					.success(function (data) {
						$scope.usuarios = data;
					});
			});
			
		};

})

.controller('usuarioCreateController', function(Usuario, $scope) {
		
		$scope.saveUsuario = function() {
		$scope.message = '';

		Usuario.create($scope.usuarioData)
			.success(function(data) {
				$scope.usuarioData = {};
				
				$scope.message = data.message;
			});
			
	};
})

.controller('usuarioEditController', function($scope,$routeParams, Usuario) {
	
	Usuario.get($routeParams.id)
		.success(function(data) {
			$scope.usuarioData = data;
		});

	$scope.saveUsuario = function() {
		//$scope.message = '';

		
		Usuario.update($routeParams.id, $scope.usuarioData)
			.success(function(data) {
				$scope.usuarioData = {};
				//$scope.message = data.message;
			});
	};

});