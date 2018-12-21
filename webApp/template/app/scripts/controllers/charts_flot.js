/**
 *
 * charts_flotCtrl
 *
 */

angular
    .module('homer')
    .controller('charts_flotCtrl', charts_flotCtrl)

function charts_flotCtrl($scope) {

    /**
     * Bar Chart Options
     */
    $scope.flotBarOptions = {
        series: {
            bars: {
                show: true,
                barWidth: 0.8,
                fill: true,
                fillColor: {
                    colors: [ { opacity: 0.6 }, { opacity: 0.6 } ]
                },
                lineWidth: 1
            }
        },
        xaxis: {
            tickDecimals: 0
        },
        colors: ["#62cb31"],
        grid: {
            color: "#e4e5e7",
            hoverable: true,
            clickable: true,
            tickColor: "#D4D4D4",
            borderWidth: 0,
            borderColor: 'e4e5e7',
        },
        legend: {
            show: false
        },
        tooltip: true,
        tooltipOpts: {
            content: "x: %x, y: %y"
        }
    };

    /**
     * Bar Chart Options for Analytics
     */
    $scope.flotBarOptionsDas = {
        series: {
            bars: {
                show: true,
                barWidth: 0.8,
                fill: true,
                fillColor: {
                    colors: [ { opacity: 1 }, { opacity: 1 } ]
                },
                lineWidth: 1
            }
        },
        xaxis: {
            tickDecimals: 0
        },
        colors: ["#62cb31"],
        grid: {
            show: false
        },
        legend: {
            show: false
        }
    };

    /**
     * Bar Chart Options for Widget
     */
    $scope.flotBarOptionsWid = {
        series: {
            bars: {
                show: true,
                barWidth: 0.8,
                fill: true,
                fillColor: {
                    colors: [ { opacity: 1 }, { opacity: 1 } ]
                },
                lineWidth: 1
            }
        },
        xaxis: {
            tickDecimals: 0
        },
        colors: ["#3498db"],
        grid: {
            show: false
        },
        legend: {
            show: false
        }
    };

    /**
     * Bar Chart data
     */
    $scope.flotChartData = [
        {
            label: "bar",
            data: [ [1, 12], [2, 14], [3, 18], [4, 24], [5, 32], [6, 22] ]
        }
    ];

    /**
     * Line Chart Data
     */
    $scope.flotLineAreaData = [
        {
            label: "line",
            data: [ [1, 34], [2, 22], [3, 19], [4, 12], [5, 32], [6, 54], [7, 23], [8, 57], [9, 12], [10, 24], [11, 44], [12, 64], [13, 21] ]
        }
    ]

    var data1 = [ [0, 26], [1, 24], [2, 29], [3, 26], [4, 33], [5, 26], [6, 36], [7, 28] ];

    $scope.chartUsersData = [data1];
    $scope.chartUsersOptions = {
        series: {
            splines: {
                show: true,
                tension: 0.4,
                lineWidth: 1,
                fill: 0.5
            },
        },
        grid: {
            tickColor: "#e4e5e7",
            borderWidth: 1,
            borderColor: '#e4e5e7',
            color: '#6a6c6f'
        },
        colors: [ "#62cb31", "#efefef"],
    };

    /**
     * Pie Chart Data
     */
    $scope.pieChartData = [
        { label: "Data 1", data: 16, color: "#84c465", },
        { label: "Data 2", data: 6, color: "#8dd76a", },
        { label: "Data 3", data: 22, color: "#a2c98f", },
        { label: "Data 4", data: 32, color: "#c7eeb4", }
    ];

    $scope.pieChartDataDas = [
        { label: "Data 1", data: 16, color: "#62cb31", },
        { label: "Data 2", data: 6, color: "#A4E585", },
        { label: "Data 3", data: 22, color: "#368410", },
        { label: "Data 4", data: 32, color: "#8DE563", }
    ];

    $scope.pieChartDataWid = [
        { label: "Data 1", data: 16, color: "#fad57c", },
        { label: "Data 2", data: 6, color: "#fde5ad", },
        { label: "Data 3", data: 22, color: "#fcc43c", },
        { label: "Data 4", data: 32, color: "#ffb606", }
    ];

    /**
     * Pie Chart Options
     */
    $scope.pieChartOptions = {
        series: {
            pie: {
                show: true
            }
        },
        grid: {
            hoverable: true
        },
        tooltip: true,
        tooltipOpts: {
            content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
            shifts: {
                x: 20,
                y: 0
            },
            defaultTheme: false
        }
    };

    $scope.lineChartData = [
        {
            label: "line",
            data: [ [1, 24], [2, 15], [3, 29], [4, 34], [5, 30], [6, 40], [7, 23], [8, 27], [9, 40] ]
        }
    ];

    /**
     * Line Chart Options
     */
    $scope.lineChartOptions = {
        series: {
            lines: {
                show: true,
                lineWidth: 1,
                fill: true,
                fillColor: {
                    colors: [ { opacity: 0.5 }, { opacity: 0.5 }
                    ]
                }
            }
        },
        xaxis: {
            tickDecimals: 0
        },
        colors: ["#62cb31"],
        grid: {
            tickColor: "#e4e5e7",
            borderWidth: 1,
            borderColor: '#e4e5e7',
            color: '#6a6c6f'
        },
        legend: {
            show: false
        },
        tooltip: true,
        tooltipOpts: {
            content: "x: %x, y: %y"
        }
    };

    /**
     * Line Chart Options for Dashboard
     */
    $scope.lineChartOptionsDas = {
        series: {
            lines: {
                show: true,
                lineWidth: 1,
                fill: true,
                fillColor: {
                    colors: [ { opacity: 1 }, { opacity: 1}
                    ]
                }
            }
        },
        xaxis: {
            tickDecimals: 0
        },
        colors: ["#62cb31"],
        grid: {
            tickColor: "#e4e5e7",
            borderWidth: 1,
            borderColor: '#e4e5e7',
            color: '#6a6c6f'
        },
        legend: {
            show: false
        },
        tooltip: true,
        tooltipOpts: {
            content: "x: %x, y: %y"
        }
    };

    /**
     * Sin cos Chart Options
     */

    var sin = [],
        cos = [];
    for (var i = 0; i < 14; i += 0.5) {
        sin.push([i, Math.sin(i)]);
        cos.push([i, Math.cos(i)]);
    }

    $scope.sinCosChartData =
        [
            { data: sin, label: "sin(x)"},
            { data: cos, label: "cos(x)"}
        ];
    $scope.sinCosChartOptions = {
        series: {
            lines: {
                show: true
            },
            points: {
                show: true
            }
        },
        grid: {
            tickColor: "#e4e5e7",
            borderWidth: 1,
            borderColor: '#e4e5e7',
            color: '#6a6c6f'
        },
        yaxis: {
            min: -1.2,
            max: 1.2
        },
        colors: [ "#62cb31", "#efefef"],
    }
}