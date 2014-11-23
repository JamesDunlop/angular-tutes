var tutorial02 = angular.module('tutorial-02', ['ngRoute'])

tutorial02.controller('slideDemoController', function ($scope) {
  $scope.subject = 'Key Features of Angular';

  $scope.bullets = [
    'Dependency Injection',
  	'Change Tracking',
  	'Data Binding (two-way)',
    'Built-in Services ($http, $location, $route)',
    'Built-in Custom Markup (ng-repeat, ng-click)'
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
    $scope.codeVisible += 1;  
  };

});