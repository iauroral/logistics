/**
 *
 * loadingCtrl
 *
 */

angular
    .module('homer')
    .controller('loadingCtrl', loadingCtrl)

function loadingCtrl($scope, $timeout) {

    $scope.runLoading = function() {
        // start loading
        $scope.loading = true;

        $timeout(function(){
            // Simulate some service
            $scope.loading = false;
        },2000)
    };


    // Demo purpose actions
    $scope.runLoading1 = function () {
        // start loading
        $scope.loading1 = true;

        $timeout(function () {
            // Simulate some service
            $scope.loading1 = false;
        }, 2000)
    };
    $scope.runLoading2 = function () {
        // start loading
        $scope.loading2 = true;

        $timeout(function () {
            // Simulate some service
            $scope.loading2 = false;
        }, 2000)
    };
    $scope.runLoading3 = function () {
        // start loading
        $scope.loading3 = true;

        $timeout(function () {
            // Simulate some service
            $scope.loading3 = false;
        }, 2000)
    };
    $scope.runLoading4 = function () {
        // start loading
        $scope.loading4 = true;

        $timeout(function () {
            // Simulate some service
            $scope.loading4 = false;
        }, 2000)
    };
    $scope.runLoading5 = function () {
        // start loading
        $scope.loading5 = true;

        $timeout(function () {
            // Simulate some service
            $scope.loading5 = false;
        }, 2000)
    };
    $scope.runLoading6 = function () {
        // start loading
        $scope.loading6 = true;

        $timeout(function () {
            // Simulate some service
            $scope.loading6 = false;
        }, 2000)
    };
    $scope.runLoading7 = function () {
        // start loading
        $scope.loading7 = true;

        $timeout(function () {
            // Simulate some service
            $scope.loading7 = false;
        }, 2000)
    };
    $scope.runLoading8 = function () {
        // start loading
        $scope.loading8 = true;

        $timeout(function () {
            // Simulate some service
            $scope.loading8 = false;
        }, 2000)
    };
    $scope.runLoading9 = function () {
        // start loading
        $scope.loading9 = true;

        $timeout(function () {
            // Simulate some service
            $scope.loading9 = false;
        }, 2000)
    };
    $scope.runLoading10 = function () {
        // start loading
        $scope.loading10 = true;

        $timeout(function () {
            // Simulate some service
            $scope.loading10 = false;
        }, 2000)
    };
    $scope.runLoading11 = function () {
        // start loading
        $timeout(function() {
            $scope.loading11 = 0.1;
        }, 500);
        $timeout(function() {
            $scope.loading11 += 0.2;
        }, 1000);
        $timeout(function() {
            $scope.loading11 += 0.3;
        }, 1500);
        $timeout(function() {
            $scope.loading11 = false;
        }, 2000);

    };
    $scope.runLoading12 = function () {
        // start loading
        $timeout(function() {
            $scope.loading12 = 0.1;
        }, 500);
        $timeout(function() {
            $scope.loading12 += 0.2;
        }, 1000);
        $timeout(function() {
            $scope.loading12 += 0.3;
        }, 1500);
        $timeout(function() {
            $scope.loading12 = false;
        }, 2000);

    };

    $scope.runLoadingDemo = function() {
        // start loading
        $scope.loadingDemo = true;

        $timeout(function(){
            // Simulate some service
            $scope.loadingDemo = false;
        },2000)
    };


}