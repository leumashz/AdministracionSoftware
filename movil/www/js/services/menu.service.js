angular
  .module('ionicApp')
  .factory('menuService', menuService);


function menuService ($http,RESOURCES) {
	return {
		getMenu: function(){
			return $http.get(RESOURCES.URL_API_MENU).then(function(response){
				return response.data;
			});
		}
	}
}
