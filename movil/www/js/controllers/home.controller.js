angular
  .module('ionicApp')
  .controller('homeCtrl',HomeCtrl);


  function HomeCtrl($scope,Info) {
    console.log('Enteo');
    Info.all()
      .success(function(data){
        console.log(data);
        $scope.info= data[0];
      });
  }
