'use strict';

//controllers.js


var mcgrawAppControllers = angular.module('mcgrawAppControllers', []);

mcgrawAppControllers.controller('HomeController', ['$scope',
  function ($scope) {
    $scope.title = "mcgraw.codes";
  }]);





