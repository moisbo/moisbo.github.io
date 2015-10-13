'use strict';
var app = angular.module('App', [
    'ui.router','angular-loading-bar'
]);
app.config(function($urlRouterProvider, $stateProvider){
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
});
app.controller('ContactCtrl', function ($scope) {
});
app.controller('HeaderCtrl', function ($scope) {
    });
app.controller('MainCtrl', function ($scope) {
});