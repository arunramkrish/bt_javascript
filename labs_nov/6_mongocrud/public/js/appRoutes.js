// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // projects page that will use the ProjectController
        .when('/projects', {
            templateUrl: 'views/project.html',
            controller: 'ProjectsController'
        });

    $locationProvider.html5Mode(true);

}]);