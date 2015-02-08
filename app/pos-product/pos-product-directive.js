.directive('posProduct', ['Product', function (Product){
    return {
      restrict: 'EA',
      templateUrl: 'pos-product/pos-product.html'
    }
  }])