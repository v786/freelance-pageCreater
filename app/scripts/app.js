'use strict';

/**
 * @ngdoc overview
 * @name eventCreaterApp
 * @description
 * # eventCreaterApp
 *
 * Main module of the application.
 */
angular
  .module('eventCreaterApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'datePicker'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
