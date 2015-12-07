angular.module('ordenService', [])

.factory('Orden', function($http) {
    var ordenFactory = {};
    
    ordenFactory.all = function() {
      return $http.get('http://45.55.49.58/api/ordenes',{cache: true});
    };
    ordenFactory.get = function(id) {
      return $http.get('http://45.55.49.58/api/orden/'+id,{cache: true});
    };
    ordenFactory.create = function(ordenData) {
      return $http.post('http://45.55.49.58/api/orden/',ordenData);
    };
    ordenFactory.update = function(id,ordenData) {
      return $http.put('http://45.55.49.58/api/orden/'+id,ordenData);
    };
    ordenFactory.delete = function(id) {
      return $http.delete('http://45.55.49.58/api/orden/'+id);
    };
    return ordenFactory;

});