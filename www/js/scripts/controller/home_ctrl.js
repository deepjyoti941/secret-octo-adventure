define(['app', 'directive/navMenu','prettify'], function (app) {
  app.controller('HomeController', function ($scope, $window) {
    $scope.title = "angularjs + requirejs";
  });
});
