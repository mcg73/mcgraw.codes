'use strict';

//controllers.js


var mcgrawAppControllers = angular.module('mcgrawAppControllers', []);

mcgrawAppControllers.controller('HomeController', ['$scope',
  function ($scope) {
    $scope.title = "mcgraw.codes";
  }]);

mcgrawAppControllers.controller('Project1Controller', ['$scope',
  function ($scope) {
    $scope.title = "mcgraw.codes/project1";
    $scope.perc = 73;
    $scope.projectedperc = 88;
    $scope.faces = [];
  }]);

mcgrawAppControllers.controller('Project2Controller', ['$scope',
  function ($scope) {
    $scope.title = "mcgraw.codes/project1";
    $scope.perc = 73;
    $scope.projectedperc = 88;
    $scope.faces = [];
  }]);

mcgrawAppControllers.controller('Project3Controller', ['$scope',
  function ($scope) {
    $scope.title = "mcgraw.codes/project2";
    $scope.perc = 73;
    $scope.projectedperc = 88;
    $scope.faces = [];
  }]);







