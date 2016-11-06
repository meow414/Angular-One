var app = angular.module('GalleryApp', ['ngRoute']); //change module name here, use ngRoute only when using routing 

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: "HomeController", //change it ofneeded
      templateUrl: "views/home.html"
    })
    .when('/photos/:id', {
      controller: 'PhotoController',//probably change
      templateUrl: 'views/photo.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
