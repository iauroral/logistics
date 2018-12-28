/**
 * 登录控制器
 */
angular
    .module('homer')
    .controller('OrderOfOwnerCompletedCtrl', function($scope, CommonService, OrderService, UserService) {
        var self = this;

        // 初始化已完成订单表数据
        self.init = function(){
            UserService.getCurrentLoginUser()
                .then(function success(response) {
                    user = response.data;
                    OrderService.getOrderCompletedByUser(user, function(orderData){
                        $scope.orders = orderData;
                    });
                }, function error(response) {
                    CommonService.alert('请登录!', '');
                });
        };


        


        self.init();
    });
