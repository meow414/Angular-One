app.factory('forecast', ['$http', function($http) {
  return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/forecast.json')
            .success(function(data) {
              return data;
            })
            .error(function(err) {
              return err;
            });
}]);//this can be mentioned as dependency in MainController and used to call success and store result in a property of MainController
