angular
  .module('ionicApp')
  .factory('platilloService',platilloService);


  function platilloService($http) {
  	return {
  		getPlatillo: function(idPlatillo){
  			return $http.get('http://45.55.49.58/platillo/'+idPlatillo).then(function(response){
  				return response.data;
  			});
  		}
  	}
  }
