(function() {
    myApp = angular.module("myApp");
    myApp.controller('KartCtrl', ['$scope', 'kartService', function($scope, kartService) {
        $scope.kart = kartService.getKart();
        $scope.buy = function(book) {
            kartService.buyBook(book);
        };
    }]);
}());