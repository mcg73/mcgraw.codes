'use strict';


var mcgrawApp = angular.module('mcgrawApp', [
  'ngRoute',
  'mcgrawAppControllers',
  'mcgrawAppDirectives'
]);


mcgrawApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '/app/partials/home.html',
        controller: 'HomeController'
      }).
      when('/project1', {
        templateUrl: '/app/partials/project1.html',
        controller: 'Project1Controller'
      }).
      when('/project2', {
        templateUrl: '/app/partials/project2.html',
        controller: 'Project2Controller'
      }).
      when('/project3', {
        templateUrl: '/app/partials/project3.html',
        controller: 'Project3Controller'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

