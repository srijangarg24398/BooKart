(function() {
    myApp = angular.module("myApp");
    myApp.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: "https://srijangarg24398.github.io/BooKart/partials/book-list.html",
                controller: "BookListCtrl"
            })
            .when('/books', {
                templateUrl: "https://srijangarg24398.github.io/BooKart/partials/book-list.html",
                controller: "BookListCtrl"
            })
            .when('/kart', {
                templateUrl: "https://srijangarg24398.github.io/BooKart/partials/kart-items.html",
                controller: "KartCtrl"
            }).
        otherwise({
            templateUrl: 'partials/404.html'
        });
    });
})();
