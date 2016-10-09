(function() {
'use strict';

angular.module('data', [])
  .service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http'];
function MenuDataService($http) {
  var service = this;

  service.getAllCategories = function() {
    return $http({
      method: 'GET',
      url: 'https://davids-restaurant.herokuapp.com/categories.json'
    }).then(function (result) {
      var data = result.data || [];

      return data;
    });
  };

  service.getItemsForCategory = function(categoryShortName) {
    var url = 'https://davids-restaurant.herokuapp.com/menu_items.json?category=';

    return $http({
      method: 'GET',
      url: url + categoryShortName
    }).then(function (result) {
      var data = result.data || { menu_items: [] };

      return data.menu_items;
    });
  };
}

})();
