'use strict';

angular.module('app', ['ui.router','angular-loading-bar']);
angular.module('app').config(['$urlRouterProvider', '$stateProvider',
    function($urlRouterProvider, $stateProvider){
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('main',{
                url:'/',
                templateUrl:'main.html'
            })
            .state('contact', {
                url:'/contact',
                templateUrl:'contact.html'
            });
    }
]);
angular.module('app').controller('contactCtrl', ['$scope', 'dataService',
    function ($scope, dataService) {
        $scope.details = [];
        dataService.getDetails(function (data) {
            $scope.details = data;
        });
    }
]);
angular.module('app').controller('headerCtrl', ['$scope',
    function ($scope) {
        $scope.references = [
            {url: 'main', title: 'Projects'},
            {url: 'contact', title: 'Contact Me'}
        ];
    }
]);
angular.module('app').controller('mainCtrl', ['$scope', '$sce', 'dataService',
    function ($scope, $sce, dataService) {
        $scope.projects = [];
        dataService.getProjects(function (data) {
            $scope.projects = data;
        });
        $scope.renderHtml = function (htmlCode) {
            return $sce.trustAsHtml(htmlCode);
        };

    }
]);
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