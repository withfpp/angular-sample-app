angular.module('posApp')
  .controller('PosFrameCtrl', ['$scope', 'Product',function ($scope, Product){
    
    init();
    $scope.data = Product.data;
    $scope.init = init;

    $scope.removeItem = function (item){
      $scope.lists.splice(
        $scope.lists.indexOf(item), 
      1);
    }

    $scope.toggleEditStatus = function (item, prop){
      if(prop === 'editPrc'){
        item.editQtt = false;
      }else{
        item.editPrc = false;
      }

      item[prop] = !item[prop];
    }

    $scope.displayLineSum = function(item){
      if($scope.status.exclusiveMode){
        return item.qtt * item.exclPrice;
      }
      return item.qtt * item.inclPrice;
    }

    $scope.updatePrice = function(item){
      item.inclPrice = Number(
        (item.exclPrice * (1 + item.taxRate)
      ).toFixed(2));
    }

    $scope.modifyQtt = function (item, addOrDeduct){
      addOrDeduct ? add(item) : deduct(item);
    }

    function add(item){
      item.qtt += 1;
      return item;
    }

    function deduct(item){
      if(item.qtt > 1) {
        item.qtt -=1;
      }
      return item;
    }

    function init(){
      $scope.lists = [];
      $scope.status = {};
      $scope.status.exclusiveMode = false;
      $scope.status.editActivated = false;
    }

  }])