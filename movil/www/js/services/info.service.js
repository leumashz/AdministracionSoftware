angular
  .module('ionicApp')
  .factory('Info',Info);

function Info($http) {
  var infoFactory = {};

  //obtener info de la cafeteria
  infoFactory.all = function() {
    return $http.get('http://localhost/api/info');
  };

  //obtener la info para editar
  infoFactory.get = function(id) {
    return $http.get('http://localhost/api/info/'+id);
  };

  //crear info
  infoFactory.create = function(infoData) {
    return $http.post('http://localhost/api/info/',infoData);
  };

  //actualizar la info
  infoFactory.update = function(id,infoData) {
    return $http.put('http://localhost/api/info/'+id,infoData);
  };

  return infoFactory;
}
