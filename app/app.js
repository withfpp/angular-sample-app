'use strict';

angular.module('posApp', [
  'ngAnimate',
  'ui.router'
])

.config(['$stateProvider','$urlRouterProvider', '$locationProvider',function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  }])