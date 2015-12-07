angular
  .module('ionicApp')
  .controller('homeCtrl',HomeCtrl);


  function HomeCtrl($scope,Info,Sugerencia,Auth,$ionicPopup,$timeout) {
    var usuario;
    Info.all()
      .success(function(data){
        console.log(data);
        $scope.info= data[0];
      });
    $scope.$on('$ionicView.enter', function(){
      Auth.getUsuario()
        .then(function (data) {
          usuario= data.data
          console.log(usuario);
        });
    });


    $scope.postSugerencia = function () {
       $scope.data = {}

       // An elaborate, custom popup
       var myPopup = $ionicPopup.show({
         template: '<input type="text" ng-model="data.titulo" placeholder="Titulo"></br><input type="text" ng-model="data.comentario" placeholder="Comentario">',
         title: 'Sugerencia',
         subTitle: 'Por favor dinos en que podemos mejorar :)',
         scope: $scope,
         buttons: [
           { text: 'Cancelar',
           onTap: function (e) {
             return null;
           }
          },
           {
             text: '<b>Enviar</b>',
             type: 'button-positive',
             onTap: function(e) {
               if (!$scope.data) {
                 e.preventDefault();
               } else {
                 return $scope.data;
               }
             }
           },
         ]
       });
       myPopup.then(function(data) {
         if(data==null)return;
         data.id_usuario=usuario._id;
         console.log('Tapped!', data);
         Sugerencia.set(JSON.stringify(data));
       });
      };





}
