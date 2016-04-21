'use strict';

/**
 * @ngdoc overview
 * @name eventCreator
 * @description
 * # eventCreatorApp
 *
 * Main module of the application.
 */
angular
  .module('eventCreatorApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'datePicker',
    'ngMap',
    'ngDialog',
    'ngCkeditor',
    'ngImageEditor',
    'naif.base64'
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
      .when('/designer', {
        templateUrl: 'views/designer.html',
        controller: 'DesignerCtrl',
        controllerAs: 'designer'
      })
      .when('/imageEditor', {
        templateUrl: 'views/imageeditor.html',
        controller: 'ImageeditorCtrl',
        controllerAs: 'imageEditor'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
