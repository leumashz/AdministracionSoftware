angular
  .module('ionicApp')
  .factory('usuarioService',UsuarioService);

  function UsuarioService($http,RESOURCES) {
    var usuarioFactory = {};

    /*usuarioFactory.all = function() {
      return $http.get('http://localhost/api/usuarios');
    }*/
    usuarioFactory.get = function(id) {
      return $http.get(RESOURCES.URL_API_USUARIO+'/'+id);
    }
    usuarioFactory.create = function(usuarioData) {
      return $http.post(RESOURCES.URL_API_USUARIO+'/',usuarioData);
    }
    usuarioFactory.update = function(id,usuarioData) {
      return $http.put(RESOURCES.URL_API_USUARIO+'/'+id,usuarioData);
    }
    usuarioFactory.delete = function(id) {
      return $http.delete(RESOURCES.URL_API_USUARIO+'/'+id);
    }
    return usuarioFactory;

}
