(function() {
    myApp = angular.module("myApp");
    myApp.factory('bookService', ['$http', function($http) {

        return {
            getBooks: function() {
                return $http({
                    method: "GET",
                    url: "https://srijangarg24398.github.io/BooKart/data/bookData.json"
                });
            }
        };
    }]);
})();