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
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

