(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyShoppingController', ToBuyShoppingController)
    .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyShoppingController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.items = ShoppingListCheckOffService.getItems('toBuyItems');

    toBuy.boughtItem = function (itemIndex) {
      ShoppingListCheckOffService.boughtItem(itemIndex);
    }
  }

  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var alreadyBought = this;

    alreadyBought.items = ShoppingListCheckOffService.getItems('alreadyBoughtItems');
  }

  function ShoppingListCheckOffService() {
    var service = this;
    // List of shopping items
    var toBuyItems = [{
      name: 'rolls',
      quantity: 10
    }, {
      name: 'bread',
      quantity: 1
    }, {
      name: 'eggs',
      quantity: 10
    }, {
      name: 'cookies',
      quantity: 10
    }, {
      name: 'cake',
      quantity: 1
    }];
    var alreadyBoughtItems = [];

    service.boughtItem = function (itemIndex) {
      alreadyBoughtItems.push(toBuyItems[itemIndex]);
      toBuyItems.splice(itemIndex, 1);
    };

    service.getItems = function (itemType) {
      var items;

      switch(itemType) {
        case 'toBuyItems':
          items = toBuyItems;
          break;
        case 'alreadyBoughtItems':
          items = alreadyBoughtItems;
          break;
        default:
          return [];
      }

      return items;
    };
  }
})();
