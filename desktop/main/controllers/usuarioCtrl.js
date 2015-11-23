angular.module('usuarioCtrl', ['usuarioService'])

.controller('usuarioController', function($scope,Usuario) {

	Usuario.all().success(function(data) {
				$scope.usuario = data;
	});


	$scope.eliminarUsuario = function() {
		Usuario.delete(id)
			.success(function (data){
				Usuario.all()
					.success(function (data) {
						$scope.usuarios = data;
					});
			});
			
		};

})

.controller('usuarioCreateController', function(Usuario) {
	

})

// controller applied to user edit page
.controller('usuarioEditController', function($scope,$routeParams, Usuario) {

	Usuario.get($routeParams.id)
		.success(function(data) {
			$scope.UsuarioData = data;
		});

	// function to save the user
	$scope.saveUsuario = function() {
		//$scope.message = '';

		// call the userService function to update 
		Menu.update($routeParams.id, $scope.usuarioData)
			.success(function(data) {
				$scope.usuarioData = {};
				//$scope.message = data.message;
			});
	};

});