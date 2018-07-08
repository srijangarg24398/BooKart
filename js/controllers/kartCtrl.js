(function() {
    myApp = angular.module("myApp");
    myApp.controller('KartCtrl', ['$scope', '$q', function($scope, $q) {
        $scope.kart = [];
        $scope.currentPage = 1;
        $scope.numPerPage = 10;
        $scope.totalItems = 100;


    }]);
}());