// public/js/services/ProjectService.js
angular.module('ProjectService', []).factory('Project', ['$http', function($http) {

    return {
        // call to get all projects
        get : function() {
            return $http.get('/api/projects');
        },


                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create : function(nerdData) {
            return $http.post('/api/projects', nerdData);
        },

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/api/projects/' + id);
        }
    }       

}]);