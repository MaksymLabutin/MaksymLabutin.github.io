(function () {
  'use strict';


  angular.module('MenuApp')
  .controller('MenuController', MenuController );

  MenuController.$inject = ['categories'];
  function MenuController(categories) {
      var category = this;
        console.log("Categories in  Controller " + categories.length);
        category.AllCategories = categories;

  }
})();
