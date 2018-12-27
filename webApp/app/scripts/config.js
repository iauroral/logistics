function configState($stateProvider, $urlRouterProvider, $compileProvider) {

    // Optimize load start with remove binding information inside the DOM element
    $compileProvider.debugInfoEnabled(true);

    // Set default state
    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'views/common_app/login.html',
            data: {
                pageTitle: '登录'
            },
            controller: 'LoginCtrl'
        })
        .state('register', {
            url: '/register',
            templateUrl: 'views/common_app/register.html',
            data: {
                pageTitle: '注册'
            },
            controller: 'RegisterCtrl'
        })
        .state('main', {
            abstract: true,
            url: '/main',
            templateUrl: 'views/common/content.html',
            data: {
                pageTitle: '首页'
            }
        })
        .state('main.dashboard', {
            url: '/dashboard',
            templateUrl: 'views/dashboard.html',
            data: {
                pageTitle: '仪表台'
            }
        })
        .state('main.vehicle', {
            url: '/vehicle',
            templateUrl: 'views/main/vehicle/index.html',
            data: {
                pageTitle: '车型管理'
            },
            controller: 'VehicleIndexCtrl'
        })
        .state('main.vehicle.add', {
            url: '/add',
            templateUrl: 'views/main/vehicle/add.html',
            data: {
                pageTitle: '增加车型'
            },
            controller: 'VehicleAddCtrl'
        })
        .state('main.vehicle.edit', {
            url: '/edit/:id',
            templateUrl: 'views/main/vehicle/edit.html',
            data: {
                pageTitle: '编辑车型'
            },
            controller: 'VehicleEditCtrl'
        })
        .state('main.category', {
            url: '/category',
            templateUrl: 'views/main/category/index.html',
            data: {
                pageTitle: '货物类别管理'
            },
            controller: 'CategoryIndexCtrl'
        })
        .state('main.category.add', {
            url: '/add',
            templateUrl: 'views/main/category/add.html',
            data: {
                pageTitle: '添加货物类别'
            },
            controller: 'CategoryAddCtrl'
        })
        .state('main.category.edit', {
            url: '/edit/:id',
            templateUrl: 'views/main/category/edit.html',
            data: {
                pageTitle: '编辑货物类别管理'
            },
            controller: 'CategoryEditCtrl'
        })
        .state('main.orderMake', {
            url: '/orderMake',
            templateUrl: 'views/main/order/orderMake.html',
            data: {
                pageTitle: '创建订单'
            },
            controller: 'OrderAddCtrl'
        })
        // 个人信息
        .state('main.personalInfo', {
            url: '/personalInfo',
            templateUrl: 'views/main/personalInfo/personalInfo.html',
            data: {
                pageTitle: '个人信息'
            },
            controller: 'PersonalInfoCtrl'
        });
}

angular
    .module('homer')
    .config(configState)
    .run(function($rootScope, $state, editableOptions) {
        $rootScope.$state = $state;
        editableOptions.theme = 'bs3';
    });