define(['app', 'directive/navMenu', 'directive/chart', 'prettify'], function (app) {
  app.controller('HomeController', function ($scope, $window) {
    $scope.title = "angularjs + requirejs";
  });
});
