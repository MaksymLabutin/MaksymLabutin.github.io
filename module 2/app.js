(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ShoppingListToBuyController)
.controller('AlreadyBoughtController', ShoppingListAlreadyBoughtController)
.service('ShoppingListService', ShoppingListCheckOffService);


// Первый контроллер
ShoppingListToBuyController.$inject = ['$scope','ShoppingListService'];
function ShoppingListToBuyController($scope,ShoppingListCheckOffService) {
  var listToBuy = this;

  listToBuy.itemsToBuy =  ShoppingListCheckOffService.getItems();

  listToBuy.itemName ="";
  listToBuy.quantity ="";
  listToBuy.items = ShoppingListCheckOffService.items;
  listToBuy.addItem = function () {
          ShoppingListCheckOffService.addItem(listToBuy.itemName , listToBuy.quantity );
  };
  listToBuy.Bought = function (itemIndex){
      ShoppingListCheckOffService.boughtItem(itemIndex);
      // $scope.$digest();
  };


};

// Второй контроллер
ShoppingListAlreadyBoughtController.$inject = ['$scope', 'ShoppingListService'];
function ShoppingListAlreadyBoughtController($scope,ShoppingListCheckOffService) {
   var listAlreadyBought = this;
     listAlreadyBought.boughtItems = ShoppingListCheckOffService.getBoughtItems();
     listAlreadyBought.boughtItemLength = ShoppingListCheckOffService.getBoughtItemLength();
    //  $scope.$watch('listAlreadyBought.boughtItems', function () {
    //    console.log("Text", ShoppingListCheckOffService.getBoughtItems().length, );
     //
    //  }, true);
    //  $scope.$watch('listAlreadyBought.boughtItems', function () {
    //    console.log("x", ShoppingListCheckOffService.getBoughtItemX().length, );
     //
    //  }, true);
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
  };
  service.boughtItem = function (indexItem) {
    var item = {
      name : items[indexItem].name,
      quantity:  items[indexItem].quantity
    };
   boughtItems.push(item);
   items.splice(indexItem, 1);
  };

  service.getItems = function () {
    return items;
  };

  service.getBoughtItems = function () {

   return boughtItems;
   };

   service.getBoughtItemLength = function () {
    var lengthArr = boughtItems;
    return  lengthArr;
    };
};

})();
