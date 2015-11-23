angular.module('usuarioService', [])

.factory('Usuario', function($http) {
    var usuarioFactory = {};

    usuarioFactory.all = function() {
      return $http.get('/api/usuarios',{cache: true});
    }
    usuarioFactory.get = function(id) {
      return $http.get('/api/usuario/'+id,{cache: true});
    }
    usuarioFactory.create = function(usuarioData) {
      return $http.post('/api/usuario/',usuarioData);
    }
    usuarioFactory.update = function(id,usuarioData) {
      return $http.put('/api/usuario/'+id,usuarioData);
    }
    usuarioFactory.delete = function(id) {
      return $http.delete('/api/usuario/'+id);
    }
    return usuarioFactory;

});