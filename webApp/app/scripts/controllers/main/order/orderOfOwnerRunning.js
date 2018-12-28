/**
 * 登录控制器
 */
angular
    .module('homer')
    .controller('OrderOfOwnerRunningCtrl', function($scope, CommonService, OrderService, UserService) {
        var self = this;

        // 初始化进行中订单表数据
        self.init = function(){
            UserService.getCurrentLoginUser()
                .then(function success(response) {
                    var user = response.data;
                    OrderService.getOrderRunningByUser(user, function(orderData){
                        $scope.orders = orderData;
                    });
                }, function error(response) {
                    CommonService.alert('请登录!', '');
                });
        };


        


        self.init();
    });
