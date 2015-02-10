angular.module('posApp')
  .directive('posProduct', ['Product', function (Product){
    return {
      restrict: 'EA',
      scope: {
        lists: '=',
        status: '='
      },
      templateUrl: 'pos-product/pos-product.html',
      link: function (scope, element, attrs){
      
        scope.removeItem = function (item){
          scope.lists.splice(
            scope.lists.indexOf(item), 
          1);
        }

        scope.toggleEditStatus = function (item, prop){  

          if(prop === 'editPrc'){
            item.editQtt = false; 
          }else{
            item.editPrc = false;
          } 
          
          item[prop] = !item[prop];
        }

        scope.displayLineSum = function(item){
          if(scope.status.exclusiveMode) 
            return item.qtt * item.exclPrice;
          return item.qtt * item.inclPrice;
        }

        scope.updatePrice = function(item){    
          item.inclPrice = Number(
            (item.exclPrice * (1 + item.taxRate)
          ).toFixed(2));       
        }

        scope.modifyQtt = function (item, addOrSubtract){
          addOrSubtract ? add(item) : subtract(item);
        }

        function add(item){
          item.qtt += 1;
          return item;
        }

        function subtract(item){
          if(item.qtt > 1) {
            item.qtt -=1;
          }
          return item;
        }

      }
    }
  }])