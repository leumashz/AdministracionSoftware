angular
  .module('ionicApp')
  .service('compraService',CompraService);



  function CompraService($http) {
    return{
      postCompra: function (orden) {
        $http.post("http://localhost/api/orden", orden).success(function(data, status) {
          console.log('Entro');
          console.log(data);
          console.log(status);
        })
      }
  }
}
