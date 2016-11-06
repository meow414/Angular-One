app.directive('appInfo', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='//this will get data from a controller
    },
    templateUrl: 'js/directives/appInfo.html'
  };
});
