angular.module('menuService', [])

.factory('Menu', function($http) {
  var menuFactory = {};
    
  //obtener todo el menu
  menuFactory.all = function() {
    return $http.get('http://45.55.49.58/api/menu');
  };
  //obtener un platillo
  menuFactory.get = function(id) {
    return $http.get('http://45.55.49.58/api/platillo/'+id);
  };
  //crear un platillo
  menuFactory.create = function(platilloData) {
    return $http.post('http://45.55.49.58/api/platillo/',platilloData);
  };
  //actualizar un platillo
  menuFactory.update = function(id,platilloData) {
    return $http.put('http://45.55.49.58/api/platillo/'+id,platilloData);
  };
  //borrar un platillo
  menuFactory.delete = function(id) {
    return $http.delete('http://45.55.49.58/api/platillo/'+id);
  };
  return menuFactory;

});