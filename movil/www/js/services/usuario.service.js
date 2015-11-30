angular
  .module('ionicApp')
  .factory('usuarioService',UsuarioService);

  function UsuarioService($http) {
    var usuarioFactory = {};

    usuarioFactory.all = function() {
      return $http.get('http://localhost/api/usuarios');
    }
    usuarioFactory.get = function(id) {
      return $http.get('http://localhost/api/usuario/'+id);
    }
    usuarioFactory.create = function(usuarioData) {
      return $http.post('http://localhost/api/usuario/',usuarioData);
    }
    usuarioFactory.update = function(id,usuarioData) {
      return $http.put('http://localhost/api/usuario/'+id,usuarioData);
    }
    usuarioFactory.delete = function(id) {
      return $http.delete('http://localhost/api/usuario/'+id);
    }
    return usuarioFactory;

}
