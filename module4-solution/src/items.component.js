(function() {
'use strict';

angular.module('MenuApp')
.component('menuItems', {
  templateUrl: 'src/templates/menu-items.template.html',
  bindings: {
    items: '<'
  }
});

})();
