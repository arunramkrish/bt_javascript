var appModule = angular.module("contactsApp", ["ngRoute", "contactFormModule", "contactListModule"]);
appModule.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when("/contacts", {
                        templateUrl:"partials/contactList.html",
                        controller: "ContactListController"
                        }).when("/contactForm", {
                        templateUrl:"partials/contactForm.html",
                        controller: "ContactFormController"
                        }).otherwise({
                        redirectTo:"/contacts"
                        });
    
}]);