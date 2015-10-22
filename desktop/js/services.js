// servicio para obtener los platillos
app.factory('platillosFactory', ['$http',
function($http) {
return $http.get('http://localhost/platillos')
   		    .success(function(data){
      			return data;
    			})
    			.error(function(err){
    				return err;	
   	 			});
  }]);