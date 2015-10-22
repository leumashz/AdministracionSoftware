angular.module('services', [])

.factory('menuService', function($http) {
	return {
		getMenu: function(){
			return $http.get('http://localhost:3000/platillos').then(function(response){
				return response.data;
			});
		}
	}
})


.factory('platilloService', function($http) {
	return {
		getPlatillo: function(idPlatillo){
			return $http.get('http://localhost:3000/platillo/'+idPlatillo).then(function(response){				
				return response.data;
			});
		}
	}
});
