(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController )
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItems);


function FoundItems() {
  var ddo = {
    templateUrl: 'listItem.html',
    scope: {
      items: '<myItems',
      onRemove: '&'
    },
    controller: NarrowItDownController,
    controllerAs: 'items',
    bindToController: true
  };
  return ddo;
};

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController (MenuSearchService) {
  var  items = this;
  items.AllItems = MenuSearchService.getItems();

  items.add = function () {
    var promise =
    items.found = MenuSearchService.getMatchedMenuItems(items.seachBox);
    items.AllItems = MenuSearchService.getItems();

  }

  items.removeItem = function (indexItem) {
    MenuSearchService.removeItem(indexItem);
  }
};


MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  var service = this;
  var foundItems = [];

  service.removeItem = function (itemIndex) {
    foundItems.splice(itemIndex, 1);
  }

  service.getItems = function () {
    return foundItems;
  };
  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
      method: "GET",
      url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
    }).then(function successCallback(result) {
      console.log("Количество элементов: " + result.data.menu_items.length);
      // console.log(result.data.menu_items);
      var description = '';
      var cout = 0;
      // searchTerm = 'chicken';
      for(var item = 0; item < result.data.menu_items.length; item++){
        description = result.data.menu_items[item].description;
        if(description.indexOf(searchTerm)!== (-1) ){
          console.log(result.data.menu_items[item]); //выводит каждый элемент
          cout++;

          foundItems.push(result.data.menu_items[item]);
          console.log(foundItems);
        };
        console.log("Кол-во найденых элементов: " + cout);
      };
      if (cout === 0) {
           foundItems = [] ;
           return foundItems;
      }
      else {
        return   foundItems;
      }
    });
  };
};

})();
