.directive('posAdd', ['Product', function (Product){
    return {
      restrict: 'EA',
      scope: {
        item: '=',
        lists: '='
      },
      templateUrl: 'pos-add/pos-add.html',
      link: function (scope, element, attrs){
        var data = scope.item;
        scope.addItem = function (){
          var item = Product.beforeAdd(angular.copy(data))
          item.qtt += 1;
          scope.lists.push(item);
        }
      }
    }
  }])