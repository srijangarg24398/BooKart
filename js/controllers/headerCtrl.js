(function() {
    myApp = angular.module("myApp");
    myApp.controller('headerCtrl', function($scope, $location) {
        $scope.nav = {};
        $scope.appDetails = {
            title: "BooKart",
            tagLine: "Over 1 million views"
        };
        $scope.nav.isActive = function(path) {
            if (path === $location.path()) {
                return true;
            }
            return false;
        };
    });
}());