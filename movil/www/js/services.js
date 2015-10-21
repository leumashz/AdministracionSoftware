angular.module('services', [])

/*.factory('platilloService', function($http){
  return {
		getPlatillos: function(){
			return $http({
    url: 'http://localhost:3000/platillos',
    method: "GET",

 });
		}
	}

})
*/





.factory('platilloService', function($http) {
   return {
     getPlatillos: function() {
       //since $http.get returns a promise,
       //and promise.then() also returns a promise
       //that resolves to whatever value is returned in it's
       //callback argument, we can return that.
       return $http.get('http://localhost:3000/platillos').then(function(result) {
           return result.data;
       });
     }
   }
})

;
