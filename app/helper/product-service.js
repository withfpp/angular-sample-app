angular.module('posApp')
  .service('Product', [function(){

    var data = { 
      name: 'Eternal Teeshirt', 
      exclPrice: 260.86956, 
      taxRate: 0.15 
    }

    var beforeAdd = function (item){
      item.inclPrice = Number((item.exclPrice * (1 + item.taxRate)).toFixed(2));
      item.tax = item.inclPrice - item.exclPrice;
      item._id ? item._id += 1 : item._id = 1;
      item.qtt = 0;
      item.editQtt = false;
      item.editPrc = false;
      return item;
    }

    return {
      data: data,
      beforeAdd: beforeAdd
    }


  }]);