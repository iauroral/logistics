/**
 *
 * inlineChartsCtrl
 *
 */

angular
    .module('homer')
    .controller('inlineChartsCtrl', inlineChartsCtrl)

function inlineChartsCtrl($scope) {

    /**
     * Inline chart
     */
    $scope.inlineData = [34, 43, 43, 35, 44, 32, 44, 52, 25];
    $scope.inlineOptions = {
        type: 'line',
        lineColor: '#54ab2c',
        fillColor: '#62cb31',
    };

    /**
     * Bar chart
     */
    $scope.barSmallData = [5, 6, 7, 2, 0, -4, -2, 4];
    $scope.barSmallOptions = {
        type: 'bar',
        barColor: '#62cb31',
        negBarColor: '#c6c6c6'
    };

    /**
     * Pie chart
     */
    $scope.smallPieData = [1, 1, 2];
    $scope.smallPieOptions = {
        type: 'pie',
        sliceColors: ['#62cb31', '#b3b3b3', '#e4f0fb']
    };

    /**
     * Long line chart
     */
    $scope.longLineData = [34, 43, 43, 35, 44, 32, 15, 22, 46, 33, 86, 54, 73, 53, 12, 53, 23, 65, 23, 63, 53, 42, 34, 56, 76, 15, 54, 23, 44];
    $scope.longLineOptions = {
        type: 'line',
        lineColor: '#62cb31',
        fillColor: '#ffffff'
    };

    /**
     * Tristate chart
     */
    $scope.tristateData = [1, 1, 0, 1, -1, -1, 1, -1, 0, 0, 1, 1];
    $scope.tristateOptions = {
        type: 'tristate',
        posBarColor: '#62cb31',
        negBarColor: '#bfbfbf'
    };

    /**
     * Discrate chart
     */
    $scope.discreteData = [4, 6, 7, 7, 4, 3, 2, 1, 4, 4, 5, 6, 3, 4, 5, 8, 7, 6, 9, 3, 2, 4, 1, 5, 6, 4, 3, 7, ];
    $scope.discreteOptions = {
        type: 'discrete',
        lineColor: '#62cb31'
    };

    /**
     * Pie chart
     */
    $scope.pieCustomData = [52, 12, 44];
    $scope.pieCustomOptions = {
        type: 'pie',
        height: '150px',
        sliceColors: ['#1ab394', '#b3b3b3', '#e4f0fb']
    };

    /**
     * Bar chart
     */
    $scope.barCustomData = [5, 6, 7, 2, 0, 4, 2, 4, 5, 7, 2, 4, 12, 14, 4, 2, 14, 12, 7];
    $scope.barCustomOptions = {
        type: 'bar',
        barWidth: 8,
        height: '150px',
        barColor: '#1ab394',
        negBarColor: '#c6c6c6'
    };

    /**
     * Line chart
     */
    $scope.lineCustomData = [34, 43, 43, 35, 44, 32, 15, 22, 46, 33, 86, 54, 73, 53, 12, 53, 23, 65, 23, 63, 53, 42, 34, 56, 76, 15, 54, 23, 44];
    $scope.lineCustomOptions = {
        type: 'line',
        lineWidth: 1,
        height: '150px',
        lineColor: '#17997f',
        fillColor: '#ffffff',
    };
}