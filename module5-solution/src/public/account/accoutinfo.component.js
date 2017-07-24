(function () {

  angular.module('public')
    .component('accoutInfo', {
      templateUrl: 'src/public/account/acountinfo.html',
      bindings:{
        account: '<',
        info: '='
      }
    })
})();
