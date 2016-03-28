'use strict';

angular
  .module('markpad', [
    'ngResource',
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/notes', {
        templateUrl: '../views/templates/notes.html',
        controller: 'NotesCtrl',
        controllerAs: 'notes'
      })
      .when('/notes/new', {
        templateUrl: '../views/templates/editor.html',
        controller: 'EditorCtrl',
        controllerAs: 'editor'
      })
      .when('/register', {
        templateUrl: '../views/templates/register.html',
        controller: 'usersCtrl',
        controllerAs: 'registration'
      })
      .otherwise({
        redirectTo: '/notes'
      });
  });
