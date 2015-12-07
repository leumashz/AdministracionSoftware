angular.module('infoService', [])

.factory('Info', function($http) {
  var infoFactory = {};
    
  //obtener info de la cafeteria
  infoFactory.all = function() {
    return $http.get('http://45.55.49.58/api/info');
  };
  
  //obtener la info para editar
  infoFactory.get = function(id) {
    return $http.get('http://45.55.49.58/api/info/'+id);
  };

  //crear info
  infoFactory.create = function(infoData) {
    return $http.post('http://45.55.49.58/api/info/',infoData);
  };
  
  //actualizar la info
  infoFactory.update = function(id,infoData) {
    return $http.put('http://45.55.49.58/api/info/'+id,infoData);
  };
  
  return infoFactory;

});