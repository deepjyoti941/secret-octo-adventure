define(['app', 'service/mapServices', 'directive/navMenu'], function (app) {
  app.controller('MapController', function ($scope, MapService) {
    $scope.title = "Where is my home?";
    $scope.latitude = 26.135415;
    $scope.longitude = 91.791332;
    MapService.initialize($scope, "map-canvas");
  })
});
