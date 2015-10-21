angular.module('services', [])

.factory('platilloService', function($http) {
	return {
		getPlatillos: function(){
			return $http.get('http://localhost:3000/platillos').then(function(response){
				return response.data;
			});
		}
	}
});
