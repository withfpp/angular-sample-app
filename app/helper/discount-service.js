angular.module('posApp')
  .service('Discount', [function (){

    function toNum (v){
      return Number(v.replace(/[^0-9\.]+/g,""));
    }

    function percentCatcher (val){
      return val.indexOf('%') > -1 ? true : false;
    }

    function percentToDecimal(val){
      return val.substr(0, val.length -1) * 0.01;
    }

    function ready (val, totalPrice){
                    
      var item = {
        name: 'DISCOUNT',
        exclPrice: 0, 
        inclPrice: 0, 
        qtt: 1,
        tax: 0
      }
      
      if(!percentCatcher(val)){
        item.exclPrice = -toNum(val);
        item.inclPrice = -toNum(val);
        return item;
      }

      var priceToAdd = percentToDecimal(val) * toNum(totalPrice);
      item.exclPrice = -priceToAdd;
      item.inclPrice = -priceToAdd;

      return item;
    }

    return {
      ready: ready
    }

  }])