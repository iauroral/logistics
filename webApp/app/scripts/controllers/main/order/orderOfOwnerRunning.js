/**
 * 登录控制器
 */
angular
    .module('homer')
    .controller('OrderOfOwnerRunningCtrl', function($scope, $state, CommonService, OrderService, UserService) {
        var self = this;

        // 初始化进行中订单表数据
        self.init = function() {
            OrderService.getOrderRunningByUser(function(orderData) {
                $scope.orders = orderData;
            });
        };

        self.confirm = function(id) {
            OrderService.confirm(id, function() {
                CommonService.success();
                $state.reload();
            });
        };

        $scope.confirm = self.confirm;

        self.init();
    });
