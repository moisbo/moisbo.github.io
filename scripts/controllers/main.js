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