angular
  .module('ionicApp')
  .factory('platilloService',platilloService);


  function platilloService($http) {
  	return {
  		getPlatillo: function(idPlatillo){
  			return $http.get('http://localhost:/platillo/'+idPlatillo).then(function(response){
  				return response.data;
  			});
  		}
  	}
  }
