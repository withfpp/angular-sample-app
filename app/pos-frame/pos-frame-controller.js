angular.module('posApp')
  .controller('PosFrameCtrl', ['$scope', 'Product',function ($scope, Product){
    init();
    $scope.data = Product.data;
    $scope.init = init;

    $scope.removeItem = function ($index){
      if($scope.editQtt) {
        $scope.editQtt = false;  
      }
      $scope.lists.splice($index, 1);
    }

    $scope.toggleEditStatus = function (item, prop){
      if(prop === 'editPrc'){
        item.editQtt = false;
      }else{
        item.editPrc = false;
      }

      item[prop] = !item[prop];
    }

    $scope.clearItems = function (){
      $scope.lists = [];
    }

    $scope.displayLineSum = function(item){
      if($scope.status.exclusiveMode){
        return item.qtt * item.exclPrice;
      }
      return item.qtt * item.inclPrice;
    }

    $scope.updatePrice = function(item){
      item.inclPrice = Number((item.exclPrice * (1 + item.taxRate)).toFixed(2));
    }

    $scope.addDiscount = function(value){
      var discountItem = {
        name: 'DISCOUNT',
        exclPrice: -value * beforeSave($('.vend-pay.inner.total span.pull-right').eq(1).text()),
        inclPrice: -value * beforeSave($('.vend-pay.inner.total span.pull-right').eq(1).text()),
        qtt: 1,
        tax: 0
      }

      function beforeSave(v){
        return Number(v.replace(/[^0-9\.]+/g,""));
      }

      $scope.lists.push(discountItem);
    }

    /**
     * [modifyQtt description]
     * @param  {[Object]} item
     * @param  {[Boolean]} addOrDeduct : true => add, false => deduct
     */
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
    }

  }])