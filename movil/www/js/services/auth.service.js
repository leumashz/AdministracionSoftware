angular
  .module('ionicApp')
  .factory('Auth',Auth)
  .factory('AuthToken',AuthToken)
  .factory('AuthInterceptor',AuthInterceptor);

function Auth($http, $q, AuthToken,RESOURCES) {
    var authFactory = {};

    /* 	se generan los argumentos que se pasaran
     	a la peticion post y en caso de que la operacion
     	sea exitosa, obtendremos un token que se almacenara
     	en el local storage
     */
    authFactory.login = function(email, password) {
      return $http.post(RESOURCES.URL_API_AUTHENTICATE, {
        email:    email,
        password: password
      })
        .success(function(data){
          AuthToken.setToken(data.token);
          return data;
        });
    }

    /* 	funcion para finalizar la sesion
    	lo que hace es eliminar el token
    	la funciona setToken() de AuthToken
    	limpia el token del local storage
    */
    authFactory.logout = function(){
      AuthToken.setToken();
    }
    /*
		Comprobar si el usuario esta loggeado
    */
    authFactory.isLoggedIn = function(){
      if(AuthToken.getToken())
        return true;
      else
        return false;
    }
    /*
		Funcion que se utiliza para obtener los datos del usuario actual
    */
    authFactory.getUsuario = function() {
      if(AuthToken.getToken())
        return $http.get(RESOURCES.URL_API_USUARIO_ON, {cache: false});
      else
        return $q.reject({ message: 'el usuario no tiene token'});
    };

    return authFactory;
  }

function AuthToken($window) {
      var authTokenFactory = {};

      // devuelve el token que se encuntra en local storage
      authTokenFactory.getToken = function() {
        return $window.localStorage.getItem('token');
      }

      /*
		Cuando esta funcion es llamada con un argumento (token valido generado por la api)
		lo almacena en local storage, en caso de llamarse sin argumentos remueve el token
		del local storage
      */
      authTokenFactory.setToken = function(token) {
        if(token)
          $window.localStorage.setItem('token',token);
        else
          $window.localStorage.removeItem('token');
      }

      return authTokenFactory;
  }

function AuthInterceptor($q,$location,AuthToken){
    var interceptorFactory = {};

    // funcion para utilizar el token en una peticion
    interceptorFactory.request = function(config){
      var token = AuthToken.getToken();

      if(token){
        config.headers['x-access-token'] = token;
      }else {
        //$location.path('/login');
      }

      return config;
    }

    interceptorFactory.responseError = function(response) {

      if(response.status == 403){
        AuthToken.setToken();
        $location.path('/login');
      }
      return $q.reject(response);
    }

    return interceptorFactory;
  }
