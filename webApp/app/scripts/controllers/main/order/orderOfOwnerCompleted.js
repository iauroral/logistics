/**
 * 登录控制器
 */
angular
    .module('homer')
    .controller('OrderOfOwnerCompletedCtrl', function($scope, $state, CommonService, OrderService, UserService) {
        var self = this;

        // 初始化已完成订单表数据
        self.init = function() {
            OrderService.getOrderCompletedByUser(function(orderData) {
                $scope.orders = orderData;
            });
        };

        self.init();
    });
