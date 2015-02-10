angular.module('posApp')
  .controller('PosFrameCtrl', ['$scope', 'Product', function ($scope, Product){
    
    init();
    $scope.data = Product.data;

    function init(){
      $scope.lists = [];
      $scope.status = {};
      $scope.status.exclusiveMode = false;
      $scope.status.editActivated = false;
    }

  }])