(function() {
    myApp = angular.module("myApp");
    myApp.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: "/partials/book-list.html",
                controller: "BookListCtrl"
            })
            .when('/books', {
                templateUrl: "/partials/book-list.html",
                controller: "BookListCtrl"
            })
            .when('/kart', {
                templateUrl: "partials/kart-items.html",
                controller: "KartController"
            }).
        otherwise({
            templateUrl: 'partials/404.html'
        });
    });
})();