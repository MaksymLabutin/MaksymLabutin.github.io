(function () {
  'use strict';

// change to datas
  angular.module('MenuApp')
   .component('categories', {
     templateUrl: 'src/templates/category.html',
     bindings: {
       categories : '<'
     }
   });
})();
