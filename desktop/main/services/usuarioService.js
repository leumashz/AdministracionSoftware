angular.module('usuarioService', [])

.factory('Usuario', function($http) {
    var usuarioFactory = {};

    usuarioFactory.all = function() {
      return $http.get('http://45.55.49.58/api/usuarios');
    }
    usuarioFactory.get = function(id) {
      return $http.get('http://45.55.49.58/api/usuario/'+id);
    }
    usuarioFactory.create = function(usuarioData) {
      return $http.post('http://45.55.49.58/api/usuario/',usuarioData);
    }
    usuarioFactory.update = function(id,usuarioData) {
      return $http.put('http://45.55.49.58/api/usuario/'+id,usuarioData);
    }
    usuarioFactory.delete = function(id) {
      return $http.delete('http://45.55.49.58/api/usuario/'+id);
    }
    usuarioFactory.getId = function(email) {
      return $http.get('http://45.55.49.58/api/usuario/'+email);
    }

    return usuarioFactory;

});