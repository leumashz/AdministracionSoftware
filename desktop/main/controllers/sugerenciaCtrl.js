angular.module('sugerenciaCtrl', ['sugerenciaService', 'authService'])

.controller('sugerenciaController', function($scope,Sugerencia) {

  Sugerencia.all().success(function(data) {
        $scope.sugerencias = data;
  });

  $scope.eliminarSugerencia = function(id) {
    Sugerencia.delete(id)
      .success(function (data){
        Sugerencia.all()
          .success(function (data) {
            $scope.sugerencias = data;
          });
      });
      
    };

})

.controller('sugerenciaCreateController', function(Sugerencia, $scope) {
    
    $scope.saveSugerencia = function() {
    $scope.message = '';

    Sugerencia.create($scope.sugerenciaData)
      .success(function(data) {
        $scope.sugerenciaData = {};
        
        $scope.message = data.message;
      });
      
  };
})

.controller('sugerenciaEditController', function($scope,$routeParams, Sugerencia) {
  
  Sugerencia.get($routeParams.id)
    .success(function(data) {
      $scope.sugerenciaData = data;
    });

  $scope.saveUsuario = function() {
    
    Sugerencia.update($routeParams.id, $scope.sugerenciaData)
      .success(function(data) {
        $scope.sugerenciaData = {};
        //$scope.message = data.message;
      });
  };

});