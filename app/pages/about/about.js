'use strict';

angular.module('mbPortfolio.about', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/about', {
        templateUrl: 'pages/about/about.html',
        controller: 'AboutCtrl'
      });
    }])

    .controller('AboutCtrl', ['$rootScope', function($rootScope) {
      $rootScope.$broadcast('page-changed', 'about');
    }]);