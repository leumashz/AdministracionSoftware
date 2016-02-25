angular.module('ordenService', [])

.factory('Orden', function($http) {
    var ordenFactory = {};
    
    ordenFactory.all = function() {
      return $http.get('http://104.236.247.213/api/ordenes');
    };
    ordenFactory.get = function(id) {
      return $http.get('http://104.236.247.213/api/orden/'+id);
    };
    ordenFactory.create = function(ordenData) {
      return $http.post('http://104.236.247.213/api/orden/',ordenData);
    };
    ordenFactory.update = function(id,ordenData) {
      return $http.put('http://104.236.247.213/api/orden/'+id,ordenData);
    };
    ordenFactory.delete = function(id) {
      return $http.delete('http://104.236.247.213/api/orden/'+id);
    };
    return ordenFactory;

});
