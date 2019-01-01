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
                pageTitle: '编辑货物类别'
            },
            controller: 'CategoryEditCtrl'
        })
        .state('main.price', {
            url: '/price',
            templateUrl: 'views/main/price/index.html',
            data: {
                pageTitle: '定价管理'
            },
            controller: 'PriceIndexCtrl'
        })
        .state('main.price.add', {
            url: '/add',
            templateUrl: 'views/main/price/add.html',
            data: {
                pageTitle: '添加定价'
            },
            controller: 'PriceAddCtrl'
        })
        .state('main.price.edit', {
            url: '/edit/:id',
            templateUrl: 'views/main/price/edit.html',
            data: {
                pageTitle: '编辑定价'
            },
            controller: 'PriceEditCtrl'
        })
        .state('main.tax', {
            url: '/tax',
            templateUrl: 'views/main/tax/index.html',
            data: {
                pageTitle: '收益管理'
            },
            controller: 'TaxIndexCtrl'
        })
        .state('main.tax.add', {
            url: '/add',
            templateUrl: 'views/main/tax/add.html',
            data: {
                pageTitle: '添加收益'
            },
            controller: 'TaxAddCtrl'
        })
        .state('main.tax.edit', {
            url: '/edit/:id',
            templateUrl: 'views/main/tax/edit.html',
            data: {
                pageTitle: '编辑收益'
            },
            controller: 'TaxEditCtrl'
        })
        .state('main.user', {
            url: '/user',
            templateUrl: 'views/main/user/index.html',
            data: {
                pageTitle: '账号管理'
            },
            controller: 'UserIndexCtrl'
        })
        .state('main.auth', {
            url: '/auth',
            templateUrl: 'views/main/auth/index.html',
            data: {
                pageTitle: '押金管理'
            },
            controller: 'AuthIndexCtrl'
        })
        .state('main.orderMake', {
            url: '/orderMake',
            templateUrl: 'views/main/order/orderMake.html',
            data: {
                pageTitle: '创建订单'
            },
            controller: 'OrderMakeCtrl'
        })
        .state('main.orders', {
            url: '/orderRunning',
            templateUrl: 'views/main/order/orderOfOwnerRunning.html',
            data: {
                pageTitle: '正在执行的订单'
            },
            controller: 'OrderOfOwnerRunningCtrl'
        })
        .state('main.orders.select', {
            url: '/select/:id',
            templateUrl: 'views/main/order/select.html',
            data: {
                pageTitle: '选择司机'
            },
            controller: 'OrderSelectDriverCtrl'
        })
        .state('main.map', {
            url: '/map',
            templateUrl: 'views/main/map/choosePlace.html',
            data: {
                pageTitle: '正在执行的订单'
            },
            controller: 'choosePlaceCtrl'
        })
        .state('main.orderCompleted', {
            url: '/orderCompleted',
            templateUrl: 'views/main/order/orderOfOwnerCompleted.html',
            data: {
                pageTitle: '历史订单'
            },
            controller: 'OrderOfOwnerCompletedCtrl'
        })
        // 个人信息
        .state('main.personalInfo', {
            url: '/personalInfo',
            templateUrl: 'views/main/personalInfo/index.html',
            data: {
                pageTitle: '个人信息'
            },
            controller: 'PersonalInfoCtrl'
        })
        .state('main.acceptorder', {
            url: '/acceptorder',
            templateUrl: 'views/main/acceptorder/index.html',
            data: {
                pageTitle: '我要接单'
            },
            controller: 'AcceptOrderCtrl'
        })
        .state('main.acceptorder.details', {
            url: '/details/:id',
            templateUrl: 'views/main/acceptorder/details.html',
            data: {
                pageTitle: '订单详情'
            },
            controller: 'DetailsCtrl'
        })
        .state('main.mywallet', {
            url: '/mywallet',
            templateUrl: 'views/main/mywallet/mywallet.html',
            data: {
                pageTitle: '我的钱包'
            },
            controller: 'WalletCtrl'
        })
        .state('main.mywallet.traderecord', {
            url: '/traderecord',
            templateUrl: 'views/main/mywallet/traderecord.html',
            data: {
                pageTitle: '交易记录'
            }
        })
        .state('main.mywallet.bindingbankcard', {
            url: '/bindingbankcard',
            templateUrl: 'views/main/mywallet/bindingbankcard.html',
            data: {
                pageTitle: '绑定银行卡'
            }
        })
        .state('main.mywallet.paydeposit', {
            url: '/paydeposit',
            templateUrl: 'views/main/mywallet/paydeposit.html',
            data: {
                pageTitle: '押金缴纳'
            },
            controller: 'PayDepositCtrl'
        })
        .state('main.mywallet.withdraw', {
            url: '/withdraw',
            templateUrl: 'views/main/mywallet/withdraw.html',
            data: {
                pageTitle: '提现'
            }
        })
        .state('main.orderDriver', {
            url: '/orderDriver',
            templateUrl: 'views/main/orderDriver/index.html',
            data: {
                pageTitle: '我的订单'
            },
            controller: 'OrderDriverCtrl'
        })
        .state('main.completeDriver', {
            url: '/completeDriver',
            templateUrl: 'views/main/order/orderOfOwnerCompleted.html',
            data: {
                pageTitle: '历史订单'
            },
            controller: 'OrderDriverCompleteCtrl'
        });
}

angular
    .module('homer')
    .config(configState)
    .run(function($rootScope, $state, editableOptions) {
        $rootScope.$state = $state;
        editableOptions.theme = 'bs3';
    });
