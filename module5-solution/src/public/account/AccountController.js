(function () {


  angular.module('public')
    .controller('AccountpController', AccountpController);


    AccountpController.$inject = ['accountInformation']
    function AccountpController(accountInformation) {
      var $ctrl = this;

      $ctrl.accountInfo = accountInformation;
      console.log($ctrl.accountInfo.email);
    }
})();
