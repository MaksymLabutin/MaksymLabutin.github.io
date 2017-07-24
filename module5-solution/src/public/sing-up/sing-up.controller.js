(function () {
  'use strict';

  angular.module('public')
    .controller('SingUpController', SingUpController);


    SingUpController.$inject = ['favDish', 'MenuService'];
    function SingUpController(favDish, MenuService) {
      var $ctrl = this;
      $ctrl.regUser = null;
      $ctrl.favoriteDish =  favDish;

      console.log("$ctrl.favoriteDish :" + $ctrl.favoriteDish);
      console.log( $ctrl.favoriteDish);
      $ctrl.user = {};
      $ctrl.submit = function () {
          console.log($ctrl.regUser);
          MenuService.register($ctrl.user.name, $ctrl.user.lastName,$ctrl.user.email,$ctrl.user.tel,$ctrl.user.favordish);
          $ctrl.regUser =  MenuService.getUser();
          console.log($ctrl.regUser);
      }
    }
})();
