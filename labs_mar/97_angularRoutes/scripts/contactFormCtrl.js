var contactFormModule = angular.module("contactFormModule", ["ngRoute"]);
contactFormModule.controller("ContactFormController", ['$rootScope', '$scope', '$route','$location', function($rootScope, $scope, $route, $location) {
    if (!$rootScope.contacts) {
        $rootScope.contacts = [];
    }
    $scope.contact = {};
    $scope.addContact = function() {
        $rootScope.contacts.push($scope.contact);
        console.log($location.url());
        $location.url("/contacts");
        
    };
    $scope.cancel = function() {
        $location.url("/contacts");
    };
}]);