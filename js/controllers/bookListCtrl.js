(function() {
    myApp = angular.module("myApp");
    myApp.controller('BookListCtrl', ['$scope', '$q', '$http', function($scope, $q, $http) {
        $scope.filteredBooks = [];
        $scope.currentPage = 1;
        $scope.numPerPage = 10;
        $scope.totalItems = 100;

        $http({
            method: "GET",
            url: "../../data/bookData.json"
        }).then(function successCallback(response) {
            $scope.books = response.data;
            $scope.totalItems = $scope.books.length;
            var promise = asyncFilterBooks(response.data);
            promise.then(function(res) {
                // $scope.filteredBooks = books;
            }).catch(function(e) {
                console.log(e);
            });
        }, function errorCallback(error) {
            console.log(error);
        });

        function asyncFilterBooks(books) {
            var deferred = $q.defer();
            if (books.length > 0) {
                deferred.resolve($scope.$watch('currentPage + numPerPage', function() {
                    var begin = (($scope.currentPage - 1) * $scope.numPerPage),
                        end = begin + $scope.numPerPage;

                    $scope.filteredBooks = $scope.books.slice(begin, end);
                }));
            } else {
                deferred.reject($scope.filteredBooks = []);
            }
            return deferred.promise;
        }

        $scope.addToCart = function(book) {
            console.log(book);
        };

    }]);
}());