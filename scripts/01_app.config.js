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