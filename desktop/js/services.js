
  app.factory('menuService', ['$http',function($http){
    var menuFactory = {};
    //obtener todo el menu
    menuFactory.all = function() {
      return $http.get('/menu');
    }
    //obtener un platillo
    menuFactory.get = function(id) {
      return $http.get('/platillo/'+id);
    }
    //crear un platillo
    menuFactory.create = function(platilloData) {
      return $http.post('/platillo/',platilloData);
    }
    //actualizar un platillo
    menuFactory.update = function(id,platilloData) {
      return $http.put('/platillo/'+id,platilloData,  { cache: false });
    }
    //borrar un platillo
    menuFactory.delete = function(id) {
      return $http.delete('/platillo/'+id, { cache: false });
    }
    return menuFactory;
}]);


  app.factory('usuarioService', ['$http',function($http){
    var usuarioFactory = {};
    usuarioFactory.all = function() {
      return $http.get('/usuarios');
    }
    usuarioFactory.get = function(id) {
      return $http.get('/usuario/'+id);
    }
    usuarioFactory.create = function(usuarioData) {
      return $http.post('/usuario/',usuarioData);
    }
    usuarioFactory.update = function(id,usuarioData) {
      return $http.put('/usuario/'+id,usuarioData);
    }
    usuarioFactory.delete = function(id) {
      return $http.delete('/usuario/'+id);
    }
    return usuarioFactory;
}]);

app.factory('ordenService', ['$http',function($http){
    var ordenFactory = {};
    ordenFactory.all = function() {
      return $http.get('/ordenes');
    }
    ordenFactory.get = function(id) {
      return $http.get('/orden/'+id);
    }
    ordenFactory.create = function(ordenData) {
      return $http.post('/orden/',ordenData);
    }
    ordenFactory.update = function(id,ordenData) {
      return $http.put('/orden/'+id,ordenData);
    }
    ordenFactory.delete = function(id) {
      return $http.delete('/orden/'+id);
    }
    return ordenFactory;
}]);

