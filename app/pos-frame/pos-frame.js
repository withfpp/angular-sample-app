'use strict'

angular.module('posApp')
  .config(['$stateProvider',function ($stateProvider){
    $stateProvider
      .state('/', {
        url: '/',
        templateUrl: './pos-frame/pos-frame.html',
        controller: 'PosFrameCtrl'
      })
  }])