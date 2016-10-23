(function () {
'use strict';

angular.module('common')
.service('StoreService', StoreService);

function StoreService() {
  var data;
  var service = this;

  service.setData = function (value) {
    data = value;
  }

  service.getData = function () {
    return data;
  }
}

})();
