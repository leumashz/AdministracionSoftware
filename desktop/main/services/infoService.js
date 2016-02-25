angular.module('infoService', [])

.factory('Info', function($http) {
  var infoFactory = {};
    
  //obtener info de la cafeteria
  infoFactory.all = function() {
    return $http.get('http://104.236.247.213/api/info');
  };
  
  //obtener la info para editar
  infoFactory.get = function(id) {
    return $http.get('http://104.236.247.213/api/info/'+id);
  };

  //crear info
  infoFactory.create = function(infoData) {
    return $http.post('http://104.236.247.213/api/info/',infoData);
  };
  
  //actualizar la info
  infoFactory.update = function(id,infoData) {
    return $http.put('http://104.236.247.213/api/info/'+id,infoData);
  };
  
  return infoFactory;

});
