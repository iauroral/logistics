/**
 *
 * chartistCtrl
 *
 */

angular
    .module('homer')
    .controller('chartistCtrl', chartistCtrl);

function chartistCtrl($scope) {


    $scope.lineData = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        series: [
            [12, 9, 7, 8, 5],
            [2, 1, 3.5, 7, 3],
            [1, 3, 4, 5, 6]
        ]
    };

    $scope.lineOptions = {
        fullWidth: true,
        chartPadding: {
            right: 40
        }
    };

    $scope.pieData = {
        series: [10, 5, 5]
    };


    $scope.guageData = {
        series: [25, 25, 25, 25]
    };

    $scope.guageOptions = {
        donut: true,
        donutWidth: 60,
        startAngle: 270,
        total: 200,
        showLabel: false
    };


    $scope.hbarData = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        series: [
            [2, 3, 4, 5, 6, 7, 8],
            [3, 4, 5, 6, 7, 8, 9]
        ]
    };

    $scope.hbarOptions = {
        seriesBarDistance: 10,
        reverseData: true,
        horizontalBars: true,
        axisY: {
            offset: 70
        }
    };

    $scope.sbarData = {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        series: [
            [800000, 1200000, 1400000, 1200000],
            [200000, 400000, 500000, 300000],
            [300000, 300000, 400000, 600000]
        ]
    };

    $scope.sbarOptions = {
        stackBars: true,
        axisY: {
            labelInterpolationFnc: function(value) {
                return (value / 1000) + 'k';
            }
        }
    };

    $scope.areaData = {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        series: [[5, 9, 7, 8, 5, 3, 5, 4]
        ]
    };

    $scope.areaOptions = {
        low: 0,
        showArea: true
    };

}