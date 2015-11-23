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
    return $http.post('/api/info/',infoData);
  };
  
  //actualizar la info
  infoFactory.update = function(id,infoData) {
    return $http.put('/api/info/'+id,infoData);
  };
  
  return infoFactory;

});