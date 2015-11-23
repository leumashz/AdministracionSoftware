angular.module('menuCtrl', ['menuService','ngFileUpload','authService'])

.controller('menuController', function($scope,Menu) {

	Menu.all().success(function(data) {
				$scope.menu = data;
	});


	$scope.eliminarPlatillo = function(id) {
		Menu.delete(id)
			.success(function (data){
				Menu.all()
					.success(function (data) {
						$scope.menu = data;
					});
			});
			
		};

})

.controller('platilloCreateController', function($scope,Menu,Upload, AuthToken,$http) {
	
	$scope.submit = function() {
      if ($scope.file) {
        console.log($scope.file);
        //$scope.upload($scope.file);
        $http.post('/api/platillo/',$scope.file);
      }
    };

    
    // upload on file select or drop
   /* $scope.upload = function (file) {
        Upload.upload({
            url: '/api/platillo/',
            data: {file: file}
        }).then(function (resp) {
            console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        });
    };*/

    $scope.upload = function(file) {
       var token = AuthToken.getToken();
       
       Upload.http({
		  url: '/api/platillo',
		  headers : {
		    'Content-Type': file.type,
		    'token': token
		  },
		  data: file
		});
     };
     
    

})

// controller applied to user edit page
.controller('platilloEditController', function($scope,$routeParams, Menu) {

	Menu.get($routeParams.id)
		.success(function(data) {
			$scope.platilloData = data;
		});

	// function to save the user
	$scope.savePlatillo = function() {
		$scope.message = '';

		// call the userService function to update 
		Menu.update($routeParams.id, $scope.platilloData)
			.success(function(data) {
				$scope.platilloData = {};
				$scope.message = data.message;
			});
	};

});