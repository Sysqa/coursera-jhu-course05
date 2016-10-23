(function () {
'use strict';

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'StoreService'];
function SignUpController(MenuService, StoreService) {
  var $ctrl = this;

  function setUserObject() {
    $ctrl.user = {};
  }

  setUserObject();

  $ctrl.signUp = function (form) {
    $ctrl.error = false;

    MenuService.getMenuItem($ctrl.user.favoriteDishNumber)
      .then(function (response) {
        $ctrl.user.favoriteMenuItem = response.data;
        StoreService.setData($ctrl.user);
        setUserObject();
        form.$setUntouched();
        $ctrl.success = true;
      })
      .catch(function () {
        $ctrl.error = true;
      });
  };
}

})();
