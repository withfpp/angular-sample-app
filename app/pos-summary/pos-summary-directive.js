angular.module('posApp')
  .directive('posSummary', ['ModalService', 'Calc', function (ModalService, Calc){
    return {
      restrict: 'EA',
      scope: {
        lists: '='
      },
      templateUrl: 'pos-summary/pos-summary.html',
      link: function (scope, element, attrs){
        
        scope.displayTax = function(){
          return Calc.displayTax(scope.lists);
        }
        scope.displaySubTotal = function(){
          return Calc.displaySubTotal(scope.lists);
        }
        scope.totalPrice = function (){ 
          return Calc.totalPrice(scope.lists);   
        }
        
        scope.clearItems = function (){
          scope.lists = [];
        }

        scope.showModal = function() {
          ModalService.showModal({
            templateUrl: "modal/modal.html",
            controller: "ModalCtrl"
          }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(result) {
              if(result === 'Yes') scope.clearItems();
            }); 
          });
        };

      }
    }
  }])