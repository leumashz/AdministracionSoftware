
  app.factory('menuService', ['$http',function($http){
    var menuFactory = {};
    //obtener todo el menu
    menuFactory.all = function() {
      return $http.get('/api/menu');
    }
    //obtener un platillo
    menuFactory.get = function(id) {
      return $http.get('/api/platillo/'+id);
    }
    //crear un platillo
    menuFactory.create = function(platilloData) {
      return $http.post('/api/platillo/',platilloData);
    }
    //actualizar un platillo
    menuFactory.update = function(id,platilloData) {
      return $http.put('/api/platillo/'+id,platilloData);
    }
    //borrar un platillo
    menuFactory.delete = function(id) {
      return $http.delete('/api/platillo/'+id);
    }
    return menuFactory;
}]);


  app.factory('usuarioService', ['$http',function($http){
    var usuarioFactory = {};
    usuarioFactory.all = function() {
      return $http.get('/api/usuarios');
    }
    usuarioFactory.get = function(id) {
      return $http.get('/api/usuario/'+id);
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
}]);

app.factory('ordenService', ['$http',function($http){
    var ordenFactory = {};
    ordenFactory.all = function() {
      return $http.get('/api/ordenes');
    }
    ordenFactory.get = function(id) {
      return $http.get('/api/orden/'+id);
    }
    ordenFactory.create = function(ordenData) {
      return $http.post('/api/orden/',ordenData);
    }
    ordenFactory.update = function(id,ordenData) {
      return $http.put('/api/orden/'+id,ordenData);
    }
    ordenFactory.delete = function(id) {
      return $http.delete('/api/orden/'+id);
    }
    return ordenFactory;
}]);

