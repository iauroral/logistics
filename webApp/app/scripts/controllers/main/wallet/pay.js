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
            UserService.pay($scope.user.id, function() {
                CommonService.success();
                $state.go('main.mywallet', {}, { reload: true });
            });
        };

        $scope.pay = self.pay;

        self.init();
    });
