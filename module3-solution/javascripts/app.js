(function() {
  'use strict';

  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItemsDirective);

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var search = this;

    search.searchTerm = '';

    search.findMenuItems = function() {
      if(isValid(search.searchTerm)) {
        MenuSearchService.getMatchedMenuItems(search.searchTerm).then(function(data) {
          search.found = data;
        });
      } else {
        search.found = [];
      }
    }

    search.removeItem = function(itemIndex) {
      search.found.splice(itemIndex, 1);
    }
  }

  function isValid(str){
    return str.replace(/^\s+/g, '').length;
  }

  MenuSearchService.$inject = ['$http', '$filter'];
  function MenuSearchService($http, $filter) {
    var service = this;

    service.getMatchedMenuItems = function(searchTerm) {
      return $http({
        method: 'GET',
        url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
      }).then(function (result) {
        var data = result.data || {};
        // process result and only keep items that match
        var foundItems = $filter('filter')(data.menu_items, { description: searchTerm });
        // return processed items
        return foundItems;
      });
    };
  }

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        items: '<',
        onRemove: '&'
      }
    };

    return ddo;
  }
})();
