angular
    .module('homer')
    .controller('PayDepositCtrl', function($scope, $state, CommonService, UserService) {
        var self = this;

        self.init = function() {
            UserService.getCurrentLoginUser()
                .then(function success(response) {
                    $scope.user = response.data;
                }, function error(response) {
                    CommonService.alert('请登录!', '');
                    $state.go('login');
                });
        };

        self.pay = function() {
            CommonService.warning(function(success, error) {
                UserService.pay($scope.user.id, function() {
                    CommonService.success('押金缴纳成功', '您现在可以去接受订单了！');
                    $state.go('main.mywallet', {}, { reload: true });
                });
            });
        };

        $scope.pay = self.pay;

        self.init();
    });
