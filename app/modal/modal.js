angular.module('posApp')
  .controller('ModalCtrl', function($scope, close) {
    $scope.message = {
      header: "Are you sure you want to void this sale?",
      body: "All products and payments will be removed from the current sale. Voided sale information is saved in the sales history."
    };
    $scope.question = "Are you sure?"
    $scope.close = function(result) {
      close(result, 500); 
    };
})
