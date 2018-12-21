/**
 *
 * chartjsCtrl
 *
 */

angular
    .module('homer')
    .controller('chartjsCtrl', chartjsCtrl)

function chartjsCtrl($scope) {

    /**
     * Global options
     */
    $scope.globalOptions = {
        responsive: true
    };

    /**
     * Data for Radar chart
     */
    $scope.radarData = [
        [65, 59, 66, 45, 56, 55, 40],
        [28, 12, 40, 19, 63, 27, 87]
    ];

    $scope.radarLabels = ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];

    $scope.radarOverride = [
        {
            label: "Dt 1",
            backgroundColor: "rgba(98,203,49,0.2)",
            borderColor: "rgba(98,203,49,1)",
            pointBackgroundColor: "rgba(98,203,49,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "#62cb31",
            borderWidth: 1
        },
        {
            label: "Dt 2",
            backgroundColor: "rgba(98,203,49,0.4)",
            borderColor: "rgba(98,203,49,1)",
            pointBackgroundColor: "rgba(98,203,49,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "#62cb31",
            borderWidth: 1
        }
    ];

    $scope.doughnutData = [20, 120, 100];
    $scope.doughnutLabels = [
        "App",
        "Software",
        "Laptop"
    ];
    $scope.doughnutColors = [
        "#62cb31",
        "#91dc6e",
        "#a3e186"
    ];

    $scope.polardata = [[120, 130, 100]];
    $scope.polarLabels = ["Homer", "Inspinia", "Luna"];
    $scope.polarOverride = [
        {
            backgroundColor: [
                "#62cb31",
                "#80dd55",
                "#a3e186"
            ],
            borderColor: [
                "#ffffff"
            ]
        }
    ];

    $scope.lineData = [
        [16, 32, 18, 26, 42, 33, 44],
        [22, 44, 67, 43, 76, 45, 12]
    ];

    $scope.lineLabels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.lineOverride = [
        {
            label: "Dt 1",
            backgroundColor: 'rgba(98,203,49, 0.5)',
            pointBorderWidth: 1,
            pointBackgroundColor: "rgba(98,203,49,1)",
            pointRadius: 3,
            pointBorderColor: '#ffffff',
            borderWidth: 1
        },
        {
            label: "Dt 2",
            backgroundColor: 'rgba(220,220,220,0.5)',
            borderColor: "rgba(220,220,220,0.7)",
            pointBorderWidth: 1,
            pointBackgroundColor: "rgba(220,220,220,1)",
            pointRadius: 3,
            pointBorderColor: '#ffffff',
            borderWidth: 1
        }
    ];

    $scope.barData = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];

    $scope.barLabels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.barSeries = ["Dt 1", "Dt 2"];
    $scope.barOverride =  [
        {
            label: "Dt 1",
            backgroundColor: "rgba(220,220,220,0.5)",
            borderColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            borderWidth: 1
        },
        {
            label: "Dt 2",
            backgroundColor: "rgba(98,203,49,0.5)",
            borderColor: "rgba(98,203,49,0.8)",
            highlightFill: "rgba(98,203,49,0.75)",
            highlightStroke: "rgba(98,203,49,1)",
            borderWidth: 1
        }
    ]

    $scope.singleBarData = [
        [15, 20, 30, 40, 30, 50, 60]
    ];

    $scope.singleBarLabels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.singleBarSeries = ["Dt 1"];
    $scope.singleBarOverride =  [
        {
            label: "Dt 1",
            backgroundColor: "rgba(98,203,49,0.5)",
            borderColor: "rgba(98,203,49,0.8)",
            highlightFill: "rgba(98,203,49,0.75)",
            highlightStroke: "rgba(98,203,49,1)",
            borderWidth: 1,
        }
    ]

    $scope.sharplineData = [
        [33, 48, 40, 19, 54, 27, 54]
    ];

    $scope.sharplineLabels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.sharplineOverride = [
        {
            label: "Dt 1",
            backgroundColor: "rgba(98,203,49,0.5)",
            data: [33, 48, 40, 19, 54, 27, 54],
            lineTension: 0,
            pointBorderWidth: 1,
            pointBackgroundColor: "rgba(98,203,49,1)",
            pointRadius: 3,
            pointBorderColor: '#ffffff',
            borderWidth: 1
        }
    ];

    $scope.lineProjectData = [
        [17,21,19,24]
    ];

    $scope.lineProjectLabels = ["January", "February", "March", "April"];
    $scope.lineProjectOverride = [
        {
            label: "Example dataset",
            backgroundColor: "rgba(98,203,49,0.5)",
            borderColor: "rgba(98,203,49,0.7)",
            pointBackgroundColor: "rgba(98,203,49,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(26,179,148,1)",
        }
    ];
}