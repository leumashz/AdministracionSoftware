angular
  .module('ionicApp')
  .service('compraService',CompraService);



  function CompraService($http) {
    return{
      postCompra: function (orden) {
        $http.post("http://45.55.49.58/orden", orden).success(function(data, status) {
            console.log(data);
            console.log(status);
        })
      }
  }
}
