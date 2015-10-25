angular
  .module('ionicApp')
  .factory('menuService', menuService);


function menuService ($http) {
	return {
		getMenu: function(){
			return $http.get('http://localhost:/menu').then(function(response){
				return response.data;
			});
		}
	}
}
