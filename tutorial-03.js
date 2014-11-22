var tutorial03 = angular.module('tutorial-03', ['ngRoute'])

tutorial03.controller('slideDemoController', function ($scope) {
  var maxCodeItems = 3;

  $scope.subject = 'Angular Concepts';

  $scope.bullets = [
    'Model - the data that is shown to the user and with which the user interacts',
    'Scope - provides a context (i.e. wrapper) for the model',
  	'Controller - set up the initial state of $scope, and add behaviour to $scope',
  	'View - the DOM - declarative markup utilising $scope variables and functions',
    'Expression - access and compose variables and functions from the scope',
    'Filter - formats the value of an expression for display to the user',
    'Data Binding - sync data between the model and the view'
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