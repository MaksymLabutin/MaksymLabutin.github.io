(function () {
  'use strict';

  angular.module('public')
    .controller('SingUpController', SingUpController);


    SingUpController.$inject = ['favDish', 'menuItems'];
    function SingUpController(favDish, menuItems) {
      var $ctrl = this;

      $ctrl.favoriteDish =  favDish;
      console.log($ctrl.favoriteDish);

      $ctrl.user = {};
      $ctrl.submit = function () {
          console.log($ctrl.user);
      }
    }
})();
