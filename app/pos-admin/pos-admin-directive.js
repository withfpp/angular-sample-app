.directive('posAdmin', ['Product', function (Product){
    return {
      restrict: 'EA',
      templateUrl: 'pos-admin/pos-admin.html'
    }
  }])