angular
  .module('ionicApp')
  .factory('platilloService',platilloService);


  function platilloService($http,RESOURCES) {
  	return {
  		getPlatillo: function(idPlatillo){
  			return $http.get(RESOURCES.URL_API_PLATILLO+'/'+idPlatillo).then(function(response){
  				return response.data;
  			});
  		}
  	}
  }
