(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      abstract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    })
    .state('public.menuitem', {
      url: '/register/{category}',
      templateUrl: 'src/public/chosenDish/chosendish.html',
      controller: 'ChosenDishController',
      controllerAs: '$ctrl',
      resolve: {
        choosenDish: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItem($stateParams.category);
        }]
      }
    })
    .state('public.signUp', {
      url: '/sing-up',
      templateUrl: 'src/public/sing-up/sing-up.html',
      controller: 'SingUpController',
      controllerAs: 'form',
      resolve: {
        favDish: ['MenuService', function (MenuService) {
          return MenuService.getMenuItems();
        }]
      }
    })
    .state('public.account', {
      url: '/accout/{favordish}',
      templateUrl: 'src/public/account/account.html',
      controller: 'AccountpController',
      controllerAs: '$ctrl',
      resolve: {
        accountInformation: ['MenuService', function (MenuService) {
          return MenuService.getUser() }]
      }
    });
}
})();
