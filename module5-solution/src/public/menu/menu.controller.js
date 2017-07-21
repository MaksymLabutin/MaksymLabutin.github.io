(function () {
"use strict";

angular.module('public')
.controller('MenuController', MenuController);

MenuController.$inject = ['menuCategories'];
function MenuController(menuCategories) {
  var $ctrl = this;
  console.log(menuCategories);
  $ctrl.menuCategories = menuCategories;
}


})();
