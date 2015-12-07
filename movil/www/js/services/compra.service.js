angular
  .module('ionicApp')
  .service('compraService',CompraService);



  function CompraService($http,RESOURCES) {
    return{
      postCompra: function (orden) {
        $http.post(RESOURCES.URL_API_ORDEN, orden).success(function(data, status) {
          console.log('Entro');
          console.log(data);
          console.log(status);
        })
      }
  }
}
