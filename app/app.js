'use strict';

angular.module('posApp', [
  'ngAnimate',
  'ui.router',
  'angularModalService'
])

.config(['$stateProvider','$urlRouterProvider', '$locationProvider',function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  }])