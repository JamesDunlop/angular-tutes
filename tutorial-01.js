var tutorial01 = angular.module('tutorial-01', ['ngRoute'])

tutorial01.controller('slideDemoController', function ($scope) {
  $scope.subject = 'What is Angular?';

  $scope.bullets = [
    'Built by Google - Open Source',
  	'JavaScript MV* Framework',
  	'Model / View / Controller',
    'Opinionated Framework',
    'Separation of Declarative Markup from Logic',
    'Comprehensive Functionality',
    'Define Custom HTML <question></question>',
    'Built to be Easily Testable',
    'Suitable for Both Small and Very Large Apps'
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