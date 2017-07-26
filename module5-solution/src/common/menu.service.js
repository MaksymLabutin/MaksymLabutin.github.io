(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  var users = [];
  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };
  service.getMenuItem = function (short_name) {
    return $http.get(ApiPath + '/menu_items/' + short_name + '.json').then(function (response) {
      console.log('data from getMenuItem');
      console.log(response.data);
      return response.data;
    });
  };
  service.register = function (firstName, LastName, email, phoneNumber, favoriteDish) {
      users = [];
      var user = {
        firstName: firstName,
        LastName : LastName,
        email: email,
        phoneNumber: phoneNumber,
        favoriteDish: service.getMenuItem(favoriteDish)
      }
      users.push(user);
  }

  service.getUser = function () {
    return users;
  }
}




})();
