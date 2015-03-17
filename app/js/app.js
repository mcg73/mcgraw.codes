'use strict';


var mcgrawApp = angular.module('mcgrawApp', [
  'ngRoute',
  'mcgrawAppControllers'
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
      otherwise({
        redirectTo: '/'
      });
  }]);

