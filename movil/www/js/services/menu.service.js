angular
  .module('ionicApp')
  .factory('menuService', menuService);


function menuService ($http) {
	return {
		getMenu: function(){
			return $http.get('http://45.55.49.58/menu').then(function(response){
				return response.data;
			});
		}
	}
}
