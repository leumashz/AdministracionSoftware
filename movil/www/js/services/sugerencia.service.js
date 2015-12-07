angular
  .module('ionicApp')
  .factory('Sugerencia',sugerencia);

  function sugerencia($http,RESOURCES)  {
    var sugerenciaFactory = {};

    sugerenciaFactory.set = function(data) {
      return $http.post(RESOURCES.URL_API_SUGERENCIA+'/',data);
    };


    return sugerenciaFactory;
  }
