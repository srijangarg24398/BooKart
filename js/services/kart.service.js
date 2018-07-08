(function() {
    myApp = angular.module("myApp");
    myApp.factory('kartService', [function() {
        var kart = [];
        var getKart = function() {
            return kart;
        };
        var addToKart = function(book) {
            kart.push(book);
        };
        var buyBook = function(book) {
            alert("Thanks for buying " + book.title);
        };
        return {
            getKart: getKart,
            addToKart: addToKart,
            buyBook: buyBook
        };
    }]);
})();