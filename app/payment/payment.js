

angular.module('posApp')
  .config(['$stateProvider',function ($stateProvider){
    $stateProvider
      .state('/', {
        url: '/',
        templateUrl: './payment/payment.html',
        controller: 'PaymentCtrl'
      })
  }])  


  .controller('PaymentCtrl', ['$scope',function ($scope){
    $scope.name = "working...";
  }])

