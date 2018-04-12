// var app = angular.module("myApp", []);

// var app = angular.module('ForecastApp', []);

var app = angular.module('GalleryApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'HomeController',
      templateUrl: 'views/home.html'
    })
    .otherwise({
      redirectTo: '/'
  });
});