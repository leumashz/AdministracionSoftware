angular.module('services', [])

.factory('menuService', function($http) {
	return {
		getMenu: function(){
			return $http.get('http://localhost:/menu').then(function(response){
				return response.data;
			});
		}
	}
})


.factory('platilloService', function($http) {
	return {
		getPlatillo: function(idPlatillo){
			return $http.get('http://localhost:/platillo/'+idPlatillo).then(function(response){
				return response.data;
			});
		}
	}
})


.factory('carritoService', function () {
	return {
		getCarrito : function () {
			return JSON.parse(window.localStorage.getItem("menuCarrito"));
		},
		setCarrito : function (menuCarrito) {
			window.localStorage.setItem("menuCarrito", JSON.stringify( menuCarrito));
		}
	}
})




;
