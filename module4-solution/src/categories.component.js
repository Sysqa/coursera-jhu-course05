(function() {
'use strict';

angular.module('MenuApp')
.component('menuCategories', {
  templateUrl: 'src/templates/menu-categories.template.html',
  bindings: {
    categories: '<'
  }
});

})();
