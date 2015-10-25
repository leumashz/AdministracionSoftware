angular
  .module('ionicApp')
  .factory('carritoService',carritoService);


  function carritoService() {
  	return {
  		getCarrito : function () {
  			return JSON.parse(window.localStorage.getItem("menuCarrito"));
  		},
  		setCarrito : function (menuCarrito) {
  			window.localStorage.setItem("menuCarrito", JSON.stringify( menuCarrito));
  		}
  	}
  }
