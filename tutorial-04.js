var tutorial04 = angular.module('tutorial-04', ['ngRoute']);

tutorial04.controller('slideDemoController', function ($scope) {
  var maxCodeItems = 3;

  $scope.subject = 'Controllers and scope';

  $scope.bullets = [
    'Controllers - main purpose is to provide a $scope object',
    'Demo how to inspect the scope by using $0',
    'Using ng-controller in the view creates a new scope',
    'Scope contains the model but is not the model',
    'Scope decouples the controller (code) from the view',
    'Binding occurs via the scope between the view and the model',
    'Every application has one $rootScope',
    'The view can bind to functions on the scope as well as properties',
    'Scope can be inherited (by default)',
    'Using $apply and $watch with $scope',
    'Follow up on ng-cloak from last time'
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