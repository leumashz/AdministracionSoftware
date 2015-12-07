angular.module('sugerenciaService', [])

.factory('Sugerenicia', function($http) {
  var sugerenciaFactory = {};
    
  sugerenciaFactory.all = function() {
    return $http.get('http://45.55.49.58/api/sugerencias');
  };
  sugerenciaFactory.get = function(id) {
    return $http.get('http://45.55.49.58/api/sugerencia/'+id);
  };
  sugerenciaFactory.create = function(sugerenciaData) {
    return $http.post('http://45.55.49.58/api/sugerencia/',platilloData);
  };
  sugerenciaFactory.update = function(id,sugerenciaData) {
    return $http.put('http://45.55.49.58/api/sugerencia/'+id,sugerenciaData);
  };
  sugerenciaFactory.delete = function(id) {
    return $http.delete('http://45.55.49.58/api/sugerencia/'+id);
  };

  return sugerenciaFactory;

});