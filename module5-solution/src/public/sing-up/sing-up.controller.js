(function () {
  'use strict';

  angular.module('public')
    .controller('SingUpController', SingUpController);


    SingUpController.$inject = ['favDish'];
    function SingUpController(favDish) {
      var $ctrl = this;

      console.log(favDish);
      $ctrl.favoriteDish =  favDish;

      $ctrl.user = {};
      $ctrl.submit = function () {
          console.log("Its work");
      }
    }
})();
