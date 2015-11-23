angular.module('menuService', [])

.factory('Menu', function($http) {
  var menuFactory = {};
    
  //obtener todo el menu
  menuFactory.all = function() {
    return $http.get('/api/menu');
  };
  //obtener un platillo
  menuFactory.get = function(id) {
    return $http.get('/api/platillo/'+id);
  };
  //crear un platillo
  menuFactory.create = function(platilloData) {
    return $http.post('/api/platillo/',platilloData);
  };
  //actualizar un platillo
  menuFactory.update = function(id,platilloData) {
    return $http.put('/api/platillo/'+id,platilloData);
  };
  //borrar un platillo
  menuFactory.delete = function(id) {
    return $http.delete('/api/platillo/'+id);
  };
  return menuFactory;

});