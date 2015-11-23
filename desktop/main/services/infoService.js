angular.module('infoService', [])

.factory('Info', function($http) {
  var infoFactory = {};
    
  //obtener info de la cafeteria
  infoFactory.all = function() {
    return $http.get('/api/info');
  };
  
  //obtener la info para editar
  infoFactory.get = function(id) {
    return $http.get('/api/info/'+id);
  };

  //crear info
  infoFactory.create = function(infoData) {
    return $http.post('/api/platillo/',infoData);
  };
  //actualizar la info
  infoFactory.update = function(id,infoData) {
    return $http.put('/api/platillo/'+id,infoData);
  };
  //borrar un platillo
  infoFactory.delete = function(id) {
    return $http.delete('/api/platillo/'+id);
  };
  return infoFactory;

});