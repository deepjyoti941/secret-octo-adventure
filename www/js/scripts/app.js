define(['angularAMD', 'angular-route'], function (angularAMD) {
  var app = angular.module("ngreq-app", ['ngRoute']);

    /**
     * Configure Angular ngApp with route and cache the needed providers
     */
     app.config(function ($routeProvider) {
      $routeProvider
      .when("/home", angularAMD.route({
        templateUrl: 'views/home.html', controller: 'HomeController', navTab: "home"
      }))
      .when("/pictures", angularAMD.route({
        templateUrl: 'views/pictures.html', controllerUrl: 'controller/pictures_ctrl', navTab: "pictures"
      }))
      .when("/modules", angularAMD.route({
        templateUrl: 'views/modules.html', controller: 'ModulesController', navTab: "modules"
      }))
      .when("/map", angularAMD.route({
        templateUrl: 'views/map.html', controller: 'MapController', navTab: "map"
      }))
      .when("/chart", angularAMD.route({
        templateUrl: 'views/chart.html', controller: 'HomeController', navTab: "chart"
      }))
      .otherwise({redirectTo: '/home'});
    });

  // Define constant to be used by Google Analytics
  app.constant("SiteName", "/angularAMD");

  // Add support for pretty print
  app.directive('prettyprint', function() {
    return {
      restrict: 'C',
      link: function postLink(scope, element, attrs) {
        element.html(prettyPrint(scope.dom));
      }
    };
  });

  // Bootstrap Angular when DOM is ready
  return angularAMD.bootstrap(app);

});
