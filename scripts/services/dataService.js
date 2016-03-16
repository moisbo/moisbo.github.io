angular.module('app').factory('dataService', ['$http', '$q',
    function ($http, $q) {
        var getProjects = function(cb){
            $http({
                method: 'GET',
                url: 'data.json'
            }).then(function successCallback(response) {
                cb(response.data.projects)
            }, function errorCallback(response) {
                cb(null);
            });
        };
        var getDetails = function(cb){
            $http({
                method: 'GET',
                url: 'data.json'
            }).then(function successCallback(response) {
                cb(response.data.details)
            }, function errorCallback(response) {
                cb(null);
            });
        };
        return {
            getDetails: getDetails,
            getProjects: getProjects
        }
    }

]);