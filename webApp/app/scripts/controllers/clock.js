/**
 *
 * clockCtrl
 *
 */

angular
    .module('homer')
    .controller('clockCtrl', clockCtrl)

function clockCtrl($scope, $timeout) {
    $scope.tickInterval = 1000 //ms

    var tick = function() {
        $scope.clock = Date.now() // get the current time
        $timeout(tick, $scope.tickInterval); // reset the timer
    }

    // Start the timer
    $timeout(tick, $scope.tickInterval);
}