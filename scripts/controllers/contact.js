angular.module('app').controller('contactCtrl', ['$scope', 'dataService',
    function ($scope, dataService) {
        $scope.details = [];
        dataService.getDetails(function (data) {
            $scope.details = data;
        });
    }
]);