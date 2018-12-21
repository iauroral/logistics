function configState($stateProvider, $urlRouterProvider, $compileProvider) {

    // Optimize load start with remove binding information inside the DOM element
    $compileProvider.debugInfoEnabled(true);

    // Set default state
    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('login', {
            url: "/login",
            templateUrl: "views/common_app/login.html",
            data: {
                pageTitle: '登录'
            },
            controller: 'LoginCtrl'
        })
        .state('register', {
            url: "/register",
            templateUrl: "views/common_app/register.html",
            data: {
                pageTitle: '注册'
            },
            controller: 'RegisterCtrl'
        })
        .state('main', {
            abstract: true,
            url: "/main",
            templateUrl: "views/common/content.html",
            data: {
                pageTitle: '首页'
            }
        })
        .state('main.dashboard', {
            url: "/dashboard",
            templateUrl: "views/dashboard.html",
            data: {
                pageTitle: '仪表台'
            }
        });
}

angular
    .module('homer')
    .config(configState)
    .run(function($rootScope, $state, editableOptions) {
        $rootScope.$state = $state;
        editableOptions.theme = 'bs3';
    });