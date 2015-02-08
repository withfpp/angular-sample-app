angular.module('posApp')
  .directive('posSummary', [function(){
    return {
      restrict: 'EA',
      scope: {
        lists: '='
      },
      templateUrl: 'pos-summary/pos-summary.html',
      link: function (scope, element, attrs){
        
        scope.displaySubTotal = function(){
          var i;
          var len = scope.lists.length
          var subTotal = 0;
          for(i = 0; i < len; i++){
            subTotal += scope.lists[i].exclPrice * scope.lists[i].qtt;
          }
          return subTotal.toFixed(2);
        }

        scope.displayTax = function(){
          var len = scope.lists.length;
          var i;
          var taxSum = 0;
          for(i = 0; i < len; i++){
            taxSum += scope.lists[i].tax * scope.lists[i].qtt;
          }
          return taxSum.toFixed(2);
        }

        scope.totalPrice = function(){
          var len = scope.lists.length;
          var i;
          var totalPrice = 0;
          for(i = 0; i < len; i++){
            totalPrice += (scope.lists[i].inclPrice * scope.lists[i].qtt);
          }
          return totalPrice.toFixed(2);
        }

        scope.clearItems = function (){
          scope.lists = [];
        }

      }
    }
  }])