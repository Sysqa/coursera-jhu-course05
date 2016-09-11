(function() {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.checkIfTooMuch = function() {
      var lunchMenu = $scope.lunchMenu || '';
      var list = [];
      var elementCount = 0;
      var enjoyMsg = 'Enjoy!';
      var tooMuchMsg = 'Too much!';
      var enterDataMsg = 'Please enter data first';
      $scope.message = '';

      if(lunchMenu) {
        list = lunchMenu.split(',');

        angular.forEach(list, function(value) {
          if(value.trim()) {
            elementCount += 1;
          }
        });

        if(elementCount === 0) {
          $scope.message = enterDataMsg;
        } else if(elementCount > 3) {
          $scope.message = tooMuchMsg;
        } else {
          $scope.message = enjoyMsg;
        }
      } else {
        $scope.message = enterDataMsg;
      }

      if($scope.message === tooMuchMsg || $scope.message === enjoyMsg) {
        $scope.classStyle = 'green';
      } else if($scope.message === enterDataMsg) {
        $scope.classStyle = 'red';
      }
    };
  }
})();
