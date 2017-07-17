(function () {
  'use strict';

  angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider', ]
    function RoutesConfig($stateProvider, $urlRouterProvider) {
      //redirect to home page
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'src/templates/home-page.html'
        })

        .state('items', {
          url: '/items/{item}',
          templateUrl: 'src/templates/items.template.html',
          controller: 'ItemsController as item',
          resolve:{
            items: ['$stateParams', 'MenuDataService',
             function ($stateParams,  MenuDataService) {
                var param = $stateParams.item;
                return MenuDataService.getItemsForCategory(param);
            }]
          }
          })

        .state('categories', {
          url: '/categories',
          templateUrl: 'src/templates/categories.html',
          controller: 'MenuController as category',
          resolve:{
            categories: ['MenuDataService', function (MenuDataService) {
              return   MenuDataService.getAllCategories();
                }]
              }
            });
    }
})();
