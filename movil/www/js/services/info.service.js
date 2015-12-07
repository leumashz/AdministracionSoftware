angular
  .module('ionicApp')
  .factory('Info',Info);

function Info($http,RESOURCES) {
  var infoFactory = {};

  //obtener info de la cafeteria
  infoFactory.all = function() {
    return $http.get(RESOURCES.URL_API_INFO);
  };

  //obtener la info para editar
  infoFactory.get = function(id) {
    return $http.get(RESOURCES.URL_API_INFO+'/'+id);
  };

  //crear info
  infoFactory.create = function(infoData) {
    return $http.post(RESOURCES.URL_API_INFO+'/',infoData);
  };

  //actualizar la info
  infoFactory.update = function(id,infoData) {
    return $http.put(RESOURCES.URL_API_INFO+'/'+id,infoData);
  };

  return infoFactory;
}
