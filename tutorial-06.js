var tutorial06 = angular.module('tutorial-06', ['ngRoute']);

tutorial06.controller('slideDemoController', function ($scope) {
  var maxCodeItems = 3;

  $scope.subject = 'Custom Directives';

  $scope.bullets = [
    '"Directives ... attach a specified behavior to that DOM element or even transform the DOM element and its children."',
    'Use them to Encapsulate markup in custom elements, handle events, observe and react to changes',
    'The key to the Angular approach of separating views as declarative markup, from logic in controllers and services',
    'Allow you to extend HTML, and to make your views clean and easy to read',
    'e.g. <currentdatetime format="dd/MM/yyyy" />'
  ];

  $scope.currentBulletIndex = 0;

  $scope.showBullet = function() {
    $scope.currentBulletIndex += 1;  
  };

  $scope.isCurrentBullet = function(index) {
    return index == $scope.currentBulletIndex;
  };

});