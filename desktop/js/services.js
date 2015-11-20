
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

app.factory('Auth', ['$http','$q', 'AuthToken', function($http, $q, AuthToken) {
    var authFactory = {};

    authFactory.login = function(email, password) {
      return $http.post('/api/authenticate', {
        email:    email,
        password: password
      })
        .success(function(data){
          AuthToken.setToken(data.token);
          return data;
        });
    }

    authFactory.logout = function(){
      AuthToken.setToken();
    }

    authFactory.isLoggedIn = function(){
      if(AuthToken.getToken())
        return true;
      else
        return false;
    }

    authFactory.getUsuario = function() {
      if(AuthToken.getToken())
        return $http.get('/api/usuarioOn', {cache: true});
      else
        return $q.reject({ message: 'el usuario no tiene token'});
    };

    return authFactory;
  }]);


  app.factory('AuthToken', ['$window', function($window) {
      var authTokenFactory = {};

      authTokenFactory.getToken = function() {
        return $window.localStorage.getItem('token');
      }

      authTokenFactory.setToken = function(token) {
        if(token)
          $window.localStorage.setItem('token',token);
        else
          $window.localStorage.removeItem('token');
      }

      return authTokenFactory;
  }]);

  app.factory('AuthInterceptor', ['$q','$location','AuthToken', function($q,AuthToken){
    var interceptorFactory = {};

    interceptorFactory.request = function(config){
      var token = AuthToken.getToken();

      if(token)
        config.headers['x-access-token'] = token;

      return config;
    }

    interceptorFactory.responseError = function(response) {
      if(response.status == 403){
        AuthToken.setToken();
        $location.path('login');
      }
      return $q.reject(response);
    }

    return interceptorFactory; 
  }]);

  app.factory('name', ['AuthToken','AuthInterceptor','Auth', function(AuthToken,AuthInterceptor,Auth){
    var logoutFactory = {};

    Auth.logout();

    $scope.usuario = {};
    $location.path('/login');

    return 
  }]);