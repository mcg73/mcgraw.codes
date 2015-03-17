'use strict';


var mcgrawApp = angular.module('mcgrawApp', [
  'ngRoute',
  'mcgrawAppControllers'
]);


mcgrawApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '/partials/home.html',
        controller: 'HomeController'
      })
      .when('/project1', {
        templateUrl: '/partials/project1.html',
        controller: 'Project1Controller'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

