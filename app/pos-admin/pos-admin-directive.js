.directive('posAdmin', ['Product','Calc', function (Product, Calc){
    return {
      restrict: 'EA',
      scope: {
        lists: '=',
        status: '='
      },
      templateUrl: 'pos-admin/pos-admin.html',
      link: function (scope, element, attrs){

        scope.addDiscount = function(value){

          var item = beforeDiscount(value);
          
          scope.lists.push(item);
        }
      
        function beforeDiscount(val){
                    
          var item = {
            name: 'DISCOUNT',
            exclPrice: 0, 
            inclPrice: 0, 
            qtt: 1,
            tax: 0
          }
          var total;

          if(!percentCatcher(val)){
            item.exclPrice = -toNum(val);
            item.inclPrice = -toNum(val);
            return item;
          }

          val = percentToDecimal(val)
          total = Calc.totalPrice(scope.lists);
          
          item.exclPrice = -(val) * total;
          item.inclPrice = -(val) * total;
          
          return item;
        }

        function toNum(v){
          return Number(v.replace(/[^0-9\.]+/g,""));
        }

        function percentCatcher (val){
          console.log(val.indexOf('%'));
          return val.indexOf('%') > -1 ? true : false;
        }

        function percentToDecimal (val){
          return val.substr(0, val.length -1) * 0.01;
        }



      }
    }
  }])