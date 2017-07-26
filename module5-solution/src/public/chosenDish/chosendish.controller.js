(function functionName() {

  'use strict';

  angular.module('public')
    .controller('ChosenDishController', ChosenDishController);

    ChosenDishController.$inject =['choosenDish'];
    function ChosenDishController(choosenDish) {
      var $ctrl = this;

      $ctrl.choosenDish = choosenDish;
    }
})();
