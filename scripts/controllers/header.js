angular.module('app').controller('headerCtrl', ['$scope',
    function ($scope) {
        $scope.references = [
            {url: 'main', title: 'Projects'},
            {url: 'contact', title: 'Contact Me'}
        ];
    }
]);