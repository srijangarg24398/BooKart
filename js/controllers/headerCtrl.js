(function() {
    myApp = angular.module("myApp");
    myApp.controller('headerCtrl', function($scope) {
        $scope.appDetails = {
            title: "BooKart",
            tagLine: "Over 1 million views"
        }
    })
}());