(function () {
  'use strict';

  angular.module('data')
  .controller('ItemsController', ItemsController);


ItemsController.$inject = ['items'];
  function ItemsController(items) {
    var item = this;

    console.log("Items length: ", items);
    item.Items = items;
  }
})();
