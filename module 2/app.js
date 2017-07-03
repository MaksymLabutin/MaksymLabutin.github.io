(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ShoppingListToBuyController)
.controller('AlreadyBoughtController', ShoppingListAlreadyBoughtController)
.service('ShoppingListService', ShoppingListCheckOffService);


// Первый контроллер
ShoppingListToBuyController.$inject = ['ShoppingListService'];
function ShoppingListToBuyController(ShoppingListCheckOffService) {
  var listToBuy = this;

  listToBuy.itemsToBuy = ShoppingListCheckOffService.getItems();
  listToBuy.itemName ="";
  listToBuy.quantity ="";
  listToBuy.items = ShoppingListCheckOffService.items;
  listToBuy.addItem = function () {
    try {
          ShoppingListCheckOffService.addItem(listToBuy.itemName , listToBuy.quantity );
    } catch (error) {
      listToBuy.errorMessage = error.message;
    }
  };
  listToBuy.Bought = function (itemIndex) {
    ShoppingListCheckOffService.boughtItem(itemIndex);
  };

};

// Второй контроллер
ShoppingListAlreadyBoughtController.$inject = ['ShoppingListService'];
function ShoppingListAlreadyBoughtController(ShoppingListCheckOffService) {
   var listAlreadyBought = this;
   listAlreadyBought.boughtItems = ShoppingListCheckOffService.boughtItems;
   try
   {
     listAlreadyBought.getBoughtItems = ShoppingListCheckOffService.getBoughtItems();
   }
   catch(error){
     listAlreadyBought.emptyMessage = error.message;
   }
};

//service
function ShoppingListCheckOffService() {
  var service = this;

  var items = [{name: 'Chips',   quantity: 1},
               {name: 'Chips',   quantity: 2},
               {name: 'Chips',   quantity: 3},
               {name: 'Chips',   quantity: 4},
               {name: 'Chips',   quantity: 5}];
var boughtItems = [];
  service.addItem = function (itemName, quantity) {

      var item = {
      name: itemName,
      quantity: quantity
    };
    items.push(item);
    // else {
    //   throw new Error("Your list is empty! Add some items...");
    // }
  };
service.boughtItem = function (indexItem) {
boughtItems.push(items[indexItem]);
  items.splice(indexItem, 1);
};

  service.getItems = function () {
    return items;
  };
 service.check = function () {
var tmp = getBoughtItems();
   if(tmp === undefine){
     throw new Error("Empty!")
   }
   else {
     return tmp;
   }
 };
  service.getBoughtItems = function () {
   return boughtItems;
   };

};

})();
