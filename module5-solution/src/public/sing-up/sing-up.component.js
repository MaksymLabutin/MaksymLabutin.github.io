(function () {
'use strict';


angular.module('public')
  .component('favoriteDish',  {
    templateUrl: 'src/public/sing-up/favdish.html',
    bindings: {
      favorDish: '<',
      dish: '='
    }
  });

})();
