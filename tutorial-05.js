var tutorial05 = angular.module('tutorial-05', ['ngRoute']);

tutorial05.controller('slideDemoController', function ($scope) {
  var maxCodeItems = 3;

  $scope.subject = 'Directives';

  $scope.bullets = [
    'Built-in - multiple possible syntaxes',
    'e.g. In Code: ngClick',
    'e.g. In Markup: ng-click data-ng-click x-ng-click ng:click ng_click',
    'ng-mouseenter, ng-mouseleave - also ..move ..down ..over ..up',
    'ng-change - requires ng-model',
    'ng-disabled',
    'ng-bind',
    'ng-bind-template',
    'ng-bind-html',
    'ng-show',
    'ng-hide',
    'ng-style, ng-class',
    'ng-switch',
    'others ...'
  ];

  $scope.currentBulletIndex = 0;
  $scope.codeVisible = 0;

  $scope.showBullet = function() {
    $scope.currentBulletIndex += 1;  
  };

  $scope.isCurrentBullet = function(index) {
    return index == $scope.currentBulletIndex;
  };

  $scope.showCode = function() {
    $scope.codeVisible = ($scope.codeVisible + 1) % (maxCodeItems + 2);
  };

});