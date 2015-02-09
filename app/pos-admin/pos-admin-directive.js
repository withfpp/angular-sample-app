.directive('posAdmin', ['Product','Calc', 'Discount',function (Product, Calc, Discount){
    return {
      restrict: 'EA',
      scope: {
        lists: '=',
        status: '='
      },
      templateUrl: 'pos-admin/pos-admin.html',
      link: function (scope, element, attrs){

        scope.addDiscount = function(value){
          
          var item = Discount.ready(
            value, Calc.totalPrice(scope.lists)
          );

          scope.lists.push(item);
        }

      }
    }
  }])