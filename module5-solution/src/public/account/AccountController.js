(function () {


  angular.module('public')
    .controller('AccountpController', AccountpController);


    AccountpController.$inject = ['accountInformation', 'MenuService']
    function AccountpController(accountInformation, MenuService) {
      var $ctrl = this;


      $ctrl.accountInfo = accountInformation;
      console.log('*****************');
      console.log($ctrl.accountInfo);
    }
})();
