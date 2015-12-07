angular
  .module('ionicApp')
  .constant('RESOURCES', (function() {
    var resource = 'http://45.55.49.58';

    return{
      URL : resource,
      URL_API :  resource+'/api',
      URL_API_MENU : resource+ '/api/menu',
      URL_API_AUTHENTICATE : resource + '/api/authenticate',
      URL_API_USUARIO_ON : resource + '/api/usuarioOn',
      URL_API_ORDEN : resource + '/api/orden',
      URL_API_INFO : resource + '/api/info',
      URL_API_PLATILLO : resource + '/api/platillo',
      URL_API_USUARIO : resource + '/api/usuario'
    }
})());
