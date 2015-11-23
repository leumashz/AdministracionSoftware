angular.module('ordenService', [])

.factory('Orden', function($http) {
    var ordenFactory = {};
    
    ordenFactory.all = function() {
      return $http.get('/api/ordenes',{cache: true});
    };
    ordenFactory.get = function(id) {
      return $http.get('/api/orden/'+id,{cache: true});
    };
    ordenFactory.create = function(ordenData) {
      return $http.post('/api/orden/',ordenData);
    };
    ordenFactory.update = function(id,ordenData) {
      return $http.put('/api/orden/'+id,ordenData);
    };
    ordenFactory.delete = function(id) {
      return $http.delete('/api/orden/'+id);
    };
    return ordenFactory;

});