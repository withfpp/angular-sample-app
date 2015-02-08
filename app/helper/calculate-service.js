angular.module('posApp')
  .service('Calc', [function (){

    var displaySubTotal = function(data){
      var i;
      var len = data.length
      var subTotal = 0;
      for(i = 0; i < len; i++){
        subTotal += data[i].exclPrice * data[i].qtt;
      }
      return subTotal.toFixed(2);
    }

    var displayTax = function(data){
      var len = data.length;
      var i;
      var taxSum = 0;
      for(i = 0; i < len; i++){
        taxSum += data[i].tax * data[i].qtt;
      }
      return taxSum.toFixed(2);
    }

    var totalPrice = function(data){
      var len = data.length;
      var i;
      var totalPrice = 0;
      for(i = 0; i < len; i++){
        totalPrice += (data[i].inclPrice * data[i].qtt);
      }
      return totalPrice.toFixed(2);
    }

    return {
      displaySubTotal: displaySubTotal,
      displayTax: displayTax,
      totalPrice: totalPrice
    }


  }])